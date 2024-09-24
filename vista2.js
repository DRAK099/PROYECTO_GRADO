let parameters = [ ]

const addJsonElement = json => {
    parameters.push(json)
    return parameters.length - 1
}

function removeElement(event, position) {
    event.target.parentElement.remove()
    delete parameters[position]
}

(function load() {
    const $formInfo = document.getElementById("formInfo");
    const $divElement = document.getElementById("divElement");
    const $btnAdd = document.getElementById("btnAdd");
    const $btnSave = document.getElementById("btnSave");

    const templateElement = (data, position) => {
        return (`
        <button onclick="removeElement(event, ${position})">x</button>
            <div class="imgBx" name="image"></div>
                <div class="content" name="content">
                    <strong>Nombre Compañia - </strong> ${data}
                </div>
        `)
    }

    $btnAdd.addEventListener("click", (event) => {
        if ($formInfo.companyName.value != "") {
            let index = addJsonElement({
                companyName: $formInfo.companyName.value,
            })
            const $div = document.createElement("div");
            $div.classList.add("card");
            $div.innerHTML = templateElement(`${$formInfo.companyName.value}`, index)
            $divElement.insertBefore($div, $divElement.firstChild);

            $formInfo.requestFullscreen()
        } else {
            alert("Complete los datos")
        }
    })

    $btnSave.addEventListener("click", (event) => {
        parameters = parameters.filter(el => el != null)
        const $jsonDiv = document.getElementById("jsonDiv")
        $jsonDiv.innerHTML = `JSON: ${JSON.stringify(parameters)}`
        $divElement.innerHTML = ""
        parameters = []
    })
})()