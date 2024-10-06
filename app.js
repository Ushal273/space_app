document.addEventListener("DOMContentLoaded", () => {
    const nextStepButton = document.getElementById("next-step");
    const stepTitle = document.getElementById("step-title");
    const stepDescription = document.getElementById("step-description");
    const chemicals = document.getElementById("chemicals");
    const bacteria = document.getElementById("bacteria");
    const energy = document.getElementById("energy");
    const tubeWorms = document.getElementById("tube-worms");

    const steps = [
        {
            title: "Step 1: Hydrothermal Vents Release Chemicals",
            description: "Hydrothermal vents release hydrogen sulfide and other chemicals into the surrounding water.",
            action: () => {
                chemicals.style.opacity = 1;
                chemicals.animate([
                    { transform: 'translateY(0)' },
                    { transform: 'translateY(-100px)' }
                ], {
                    duration: 2000,
                    iterations: 1,
                    fill: 'forwards'
                });
            }
        },
        {
            title: "Step 2: Chemosynthetic Bacteria Absorb Chemicals",
            description: "Chemosynthetic bacteria absorb hydrogen sulfide and convert it into energy through chemosynthesis.",
            action: () => {
                bacteria.style.opacity = 1;
                bacteria.animate([
                    { transform: 'translateY(0)' },
                    { transform: 'translateY(-50px)' }
                ], {
                    duration: 2000,
                    iterations: 1,
                    fill: 'forwards'
                });
            }
        },
        {
            title: "Step 3: Energy Production",
            description: "Bacteria produce energy using the absorbed chemicals, supporting various life forms in the ecosystem.",
            action: () => {
                energy.style.opacity = 1;
                energy.animate([
                    { transform: 'translateY(0)' },
                    { transform: 'translateY(-30px)' }
                ], {
                    duration: 2000,
                    iterations: 1,
                    fill: 'forwards'
                });
            }
        },
        {
            title: "Step 4: Growth of Tube Worms",
            description: "Tube worms and other organisms rely on the bacteria for nutrition, forming a symbiotic relationship.",
            action: () => {
                tubeWorms.style.opacity = 1;
                tubeWorms.animate([
                    { transform: 'translateY(0)' },
                    { transform: 'translateY(-20px)' }
                ], {
                    duration: 2000,
                    iterations: 1,
                    fill: 'forwards'
                });
            }
        }
    ];

    let currentStep = 0;

    nextStepButton.addEventListener("click", () => {
        if (currentStep < steps.length) {
            stepTitle.textContent = steps[currentStep].title;
            stepDescription.textContent = steps[currentStep].description;
            steps[currentStep].action(); // Calls the action function
            currentStep++;
        } else {
            nextStepButton.disabled = true; // Disable button if all steps completed
            nextStepButton.textContent = "Simulation Complete"; // Change button text
        }
    });
});
