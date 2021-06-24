class mirrorButton {
	/**
	 * Handles the click or contextmenu events for token mirror buttons
	 * 
	 * @param {Event} event - The triggering event.
	 * @param {Token} tokenData - The file path of the image to display.
	 */
	static async buttonEventHandler(event, tokenData, axis) {
        let token = canvas.tokens.get(tokenData._id);
        if (axis == "X") {
            await token.update({"mirrorX": !token.data.mirrorX});
        } else if (axis == "Y") {
            await token.update({"mirrorY": !token.data.mirrorY});
        }
    }
    
	/**
	 * Create the HTML elements for the HUD button
	 * including the Font Awesome icon and tooltop.
	 * 
	 * @return {Element} The `<div>` element that is used as the HUD button.
	 */
	static createButton(mirrorAxis) {
		let button = document.createElement("div");

		button.classList.add("control-icon");
        if (mirrorAxis == "X") {
            button.innerHTML = `<i class="fab fa-flipboard fa-fw"></i>`
            button.title = game.i18n.localize("HRZFLP.TooltipText");
        } else if (mirrorAxis == "Y") {
            button.innerHTML = `<i class="fab fa-think-peaks fa-fw"></i>`
            button.title = game.i18n.localize("VRTFLP.TooltipText");
        }
		return button;
    }
    
	/**
	 * Adds the button to the Token HUD,
	 * and attaches event listeners.
	 *
	 * @param {TokenHUD} hud - The HUD object, not used.
	 * @param {jQuery} html - The jQuery reference to the HUD HTML.
	 * @param {Token} token - The data for the Token.
	 */
	static prepTokenHUD(hud, html, token) {
		const mirrorButtonX = this.createButton("X");
        const mirrorButtonY = this.createButton("Y");

		$(mirrorButtonX)
			.click((event) =>
				this.buttonEventHandler(event, token, "X")
			)
			.contextmenu((event) =>
				this.buttonEventHandler(event, token, "X")
			);
		$(mirrorButtonY)
			.click((event) =>
				this.buttonEventHandler(event, token, "Y")
			)
			.contextmenu((event) =>
				this.buttonEventHandler(event, token, "Y")
			);
            
		html.find("div.right").append(mirrorButtonX);
        html.find("div.right").append(mirrorButtonY);
    }
}

Hooks.on("renderTokenHUD", (...args) => mirrorButton.prepTokenHUD(...args));