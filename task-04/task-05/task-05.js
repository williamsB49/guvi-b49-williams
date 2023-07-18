// Create your own resume data in JSON format
var resume = {
    my_Name: "williams",
    Email: "jackwilliams280309@gmail.com",
    Date_of_birth: "19.03.1998",
    Gender: "Male",
    Nationality: "Indian",
    Marital_Status: "Single",
    Languages_known: ["English", "Tamil"],
    Age: 24,
    Qualification: "BCA bachelor of computer application",
    Software_proficiency: [
      "javascript",
      "HTML",
      "css",
      "node.js",
    ],
    Key_strength: ["short leaning curve", "creative", "apdaptive"],
    Personal_hobbies: ["Gaming", "Binge watching"],
  };
  
  var resume_JSON_Format = JSON.stringify(resume);
  console.log(resume_JSON_Format);
  
  // For the given JSON iterate over all for loops (for, for in, for of, forEach)
  var json_data = {
    my_Name: "williams",
    Email: "jackwilliams280309@gmail.com",
    Date_of_birth: "19.03.1998",
    Gender: "Male",
    Nationality: "Indian",
    Marital_Status: "Single",
    Languages_known: ["English", "Tamil"],
    Age: 24,
  };
  const count = Object.keys(json_data);
  
  // for loop
  for (let i = 0; i < count.length; i++) {
    console.log(json_data[count[i]]);
  }
  
  // for in
  for (let keys in json_data) {
    console.log(json_data[keys]);
  }
  
  // for Of
  for (let i of count) {
    console.log(json_data[i]);
  }
  
  // for each
  count.forEach(values);
  function values(item) {
    console.log(json_data[item]);
  }