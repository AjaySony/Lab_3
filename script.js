function createHamburger() {

    const bunType = document.getElementById("bunType").value;



    const hamburger = {
        bunType: bunType,

        describe() {
            // Generate a description of the hamburger
            return `You've built a hamburger with a ${this.bunType} bun.`; // Add more description based on options
        }
    };

    document.getElementById("hamburgerDescription").innerText = hamburger.describe();
}
