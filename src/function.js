const EN = {
  "1": "PRINT",
  "2": "DOWNLOAD",
  "3": "Finish",
  "4": "RESET",
  "11": " Items",
  "12": "Size",
  "13": "Rotation",
  "14": "Layer",
  "15": "Pattern",
  "16": "Delete",
  "17": "Finish",
  "20": "1. Choose a layer",
  "21": "2. Choose and edit your pattern",
  "22": "3. Next layer",
  "23": "4. Ready? Let's go!",
  "24": "3. Edit your layer or finish",
  "30": "Please rotate your device."
};

const FR = {
  "1": "IMPRIMER",
  "2": "TELECHARGER",
  "3": "Terminer",
  "4": "REINITIALISER",
  "11": " Elements",
  "12": "Taille",
  "13": "Tourner",
  "14": "Layer",
  "15": "Pattern",
  "16": "Supprimer",
  "17": "Termine",
  "20": "1. Choisir un layer",
  "21": "2. Choisir et modifier votre pattern",
  "22": "3. Layer suivant",
  "23": "4. Etes vous pret ! Allons y",
  "24": "3. Modifier votre layer ou termine",
  "30": "SVP retourner votre terminal."
};

function doTranslate(data) {
  $('.translate').each(function (){
    const id = $(this).data('id');
    $(this).html(data[id]);
  });
}
