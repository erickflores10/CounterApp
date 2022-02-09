export const getInfo = async () => {
    try {
        const URL = "https://pasteblock.herokuapp.com/api/login";
        const OPTIONS = {
            method: "GET",
            // body: JSON.stringify(), method: POST
            mode: "no-cors", // *
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"           
            }
        }
        const request = await fetch(URL, OPTIONS);
        const response = await request.json();

        console.log(response);
    } catch(error) {
        console.log(error);
    }
    console.log("asassad");
}