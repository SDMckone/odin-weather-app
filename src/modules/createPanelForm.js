function createPanelForm() {
  const panelForm = document.createElement("form");
  panelForm.id = "panel-form";
  panelForm.action = "/add-panel";
  panelForm.method = "post";
  panelForm.autocomplete = "off";

  const formTopSection = document.createElement("div");
  formTopSection.id = "form-top-section";

  const panelLocationLabel = document.createElement("label");
  panelLocationLabel.for = "panel-location";
  panelLocationLabel.textContent = "New Location";

  formTopSection.appendChild(panelLocationLabel);

  const panelLocation = document.createElement("input");
  panelLocation.type = "text";
  panelLocation.id = "panel-location";

  formTopSection.appendChild(panelLocation);
  panelForm.appendChild(formTopSection);

  const formBottomSection = document.createElement("div");
  formBottomSection.id = "form-bottom-section";

  const addLocation = document.createElement("button");
  addLocation.id = "add-location";
  addLocation.type = "submit";

  const checkImg = document.createElement("img");
  checkImg.src = "assets/Icons/check.svg";
  checkImg.alt = "add location button";
  checkImg.classList.add("icon2");

  addLocation.appendChild(checkImg);
  formBottomSection.appendChild(addLocation);

  const deleteLocation = document.createElement("button");
  deleteLocation.id = "delete-location";
  deleteLocation.type = "button";

  const trashImg = document.createElement("img");
  trashImg.src = "assets/Icons/trash.svg";
  trashImg.alt = "delete location button";
  trashImg.classList.add("icon2");

  deleteLocation.appendChild(trashImg);
  formBottomSection.appendChild(deleteLocation);
  panelForm.appendChild(formBottomSection);

  return panelForm;
}

export default createPanelForm;
