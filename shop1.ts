function addNumbers(): void {

    
    const units: NodeListOf<HTMLInputElement> = document.getElementsByName("unit-price") as NodeListOf<HTMLInputElement>;
    const quantities: NodeListOf<HTMLInputElement> = document.getElementsByName("quantity") as NodeListOf<HTMLInputElement>;

    const output1 = document.getElementById("payment") as HTMLInputElement;
    const output2 = document.getElementById("discounted") as HTMLInputElement;
    let sum: number = 0;

    for (let i = 0; i < units.length; i++) {
        const unitPrice: number = parseFloat(units[i].textContent || "0");
        const quantity: number = parseFloat(quantities[i].textContent || "0");

     sum += unitPrice * quantity;

    }
    output1.innerText = sum.toString();
    output2.innerText = (sum * 0.75).toString(); // Apply 25% discount
    console.log(sum);
}

document.getElementById("calculate-total")?.addEventListener("click", addNumbers);