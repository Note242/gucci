 // Votre clé API
 const apiKey = 'VOTRE_CLÉ_API_ICI';

 // URL de l'API pour récupérer tous les pays
 const apiUrl = 'https://api.countrystatecity.in/v1/countries';

 // Fonction pour récupérer la liste des pays et les afficher dans la liste déroulante
 async function fetchCountries() {
   try {
     const response = await fetch(apiUrl, {
       headers: {
         "X-CSCAPI-KEY": apiKey
       }
     });

     if (!response.ok) {
       throw new Error('Erreur lors de la récupération des données');
     }

     const countries = await response.json();

     // Sélectionner l'élément <select>
     const countryDropdown = document.getElementById('countryDropdown');

     // Parcourir la liste des pays et ajouter les options
     countries.forEach(country => {
       const option = document.createElement('option');
       option.value = country.iso2;
       option.textContent = country.name;
       countryDropdown.appendChild(option);
     });
   } catch (error) {
     console.error('Erreur:', error);
   }
 }

 // Appel de la fonction pour charger les pays lorsque la page se charge
 document.addEventListener('DOMContentLoaded', fetchCountries);