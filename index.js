let arr = []


class Contact {
    constructor(nom,prenom,age,sexe){
        this.nom = nom;
        this.prenom = prenom
        this.age = age;
        this.sexe = sexe
    }

}

let Jojo = new Contact("Jostar", "Jojo", 27, "male")

let David = new Contact("Jolana","David", 23,"male")

let Artur = new Contact("Hovanisyan","Arthur", 29,"male")

arr.push(Jojo,David,Artur)



let nom = document.querySelector("#nom")
let prenom = document.querySelector("#prenom")
let age = document.querySelector("#age")
let sexe = document.querySelector("#sexe")



const myFunc = function(e) {
    e.preventDefault()
    let contact1 =  new Contact(nom.value,prenom.value, age.value, sexe.value)
    arr.push(contact1)

    let texts = `
    <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">Prenom</th>
            <th scope="col">Age</th>
            <th scope="col">Sexe</th>
            </tr>
        </thead>
        <tbody id="contact-content">
        </tbody>
    </table>
`
    document.querySelector("#main").innerHTML = texts

    arr.forEach((element,index)=>{
        document.querySelector("#contact-content").innerHTML += ` <tr>
        <th scope="row">${index+1}</th>
        <td>${element.nom}</td>
        <td>${element.prenom}</td>
        <td>${element.age}</td>
        <td>${element.sexe}</td>
      </tr>`
    })
}


document.querySelector("#submit").addEventListener("click", myFunc)





selector.innerHTML = ` ${contacts}`