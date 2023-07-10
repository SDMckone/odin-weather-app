function createAddPanelButton() {
  const panelButton = document.createElement("button");
  panelButton.id = "add-panel-button";
  panelButton.type = "button";
  panelButton.textContent = "+";

  return panelButton;
}

export default createAddPanelButton;
