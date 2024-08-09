// this is a comment

// console.log("Hello World");


// var prompt = prompt("What is your name?");
// console.log(prompt)


//  if(10>9){
//   console.log('true');
// }else{
//  console.log('this is false');
// }








function AgeCheck (age){
  var age= prompt('How old are you?');

  if( age < 18){
    alert('Minor ');
  } else if(age >= 18 && age <= 55){
    alert('Adult');
  } else {
    alert('Senior'); 
  }
}
 // AgeCheck()


// function introduction(age,name,location){
//   console.log(age)
//   console.log(name)
//   console.log(location)
//   console.log("My name is " + name + " and I am " + age + " years old. I live in " +location)

// }
// introduction(18, "Oleksandr","NYC")





function uploadAndIdentifyPlantID(){
  var  photoInput = document.getElementById("photoInput");
 console.log(photoInput)
  console.log(photoInput.files[0])

  
  if (photoInput.files.length===0){
    alert("Please select a photo to upload");
    return
  }
  // catch and store the file
  var selectedfile = photoInput.files[0];
  
  var reader = new FileReader();

  // event handler and doing API's
  reader.onload = function(e){
    var base64Image = e.target.result;

    var apiKey = "gaJUdRaqQVclr3ukFg1EMXtvkfcEwwxzSKn48kJLjSRDbngIdL" ;
    var latitude = 49.207;
    var longitude = 16.608 ;
    var health = "all";
    var similarimages = true;
    var details = "common_names,url,description,taxonomy,rank,gbif_id,inaturalist_id,image,synonyms,edible_parts,watering,propagation_methods,treatment,cause"
    var language = "en";
    var apiURL = `https://plant.id/api/v3/identification?details={details}&language=${language}`;
  }

axios.post(
  apiURL,
  {
    images: [base64Image],
    latitude: latitude,
    longitude: longitude,
    health: health,
    similarimages: similarimages
  },
  {
    headers: {
      "Api-key": apiKey,
      "Content-Type": "application/json"
       }
     }
  )

  
}

 