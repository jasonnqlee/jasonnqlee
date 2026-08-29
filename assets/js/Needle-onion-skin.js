document.addEventListener("DOMContentLoaded", function () {

    const slider = document.getElementById("onionSlider");

    const currentImage =
        document.getElementById("onionCurrent");

    const previousImage =
        document.getElementById("onionPrevious");

    const iterationNumber =
        document.getElementById("iterationNumber");

    const detailTitle =
        document.getElementById("detailTitle");

    const detailMeta =
        document.getElementById("detailMeta");

    const detailDesc =
        document.getElementById("detailDesc");


    /*
     * ========================================
     * ITERATION DATA
     * ========================================
     */

    const iterations = [

        {
            image: "images/NeedleCap/Iteration-0.png",

            title: "Existing Baseline Design",

            meta: "Material: 0.05 cubic inches, Deflection: 0.2073 inches",

            description:
                "<p>+ Baseline design from Insulet. Reliable and proven. Baseline for subsequent optimization.</p>"
        },


        {
            image: "images/NeedleCap/Iteration-1.png",

            title: "W design V1",

            meta: "Material Savings: 18.02%, Stiffness Loss: 21.71%",

            description:
                "<p>+ W-shape design keeps central area wide, while outer prongs help support it during linear feeding.</p>"
        },


        {
            image: "images/NeedleCap/Iteration-2.png",

            title: "W design V2",

            meta: "Material Savings: 20.24%, Stiffness Loss: 22.86%",

            description:
                "<p>+ Extended the side rails and deepened W-shape design while also thinning them out to save more material.</p>"
        },


        {
            image: "images/NeedleCap/Iteration-3.png",

            title: "2-Rib V1",

            meta: "Material Savings: 23.10%, Stiffness Loss: 25.04%",

            description:
                "<p>+ Moved to 2-rib design to increase flat pickable area for top side vacuum pick system.</p>"
        },


        {
            image: "images/NeedleCap/Iteration-4.png",

            title: "2-Rib V2",

            meta: "Material Savings: 23.04%, Stiffness Loss: 24.50%",

            description:
                "<p>+ Added a chamfer outside to smoothen transitions. Between upper section and lower section (see photo below).</p>"
        },


        {
            image: "images/NeedleCap/Iteration-5.png",

            title: "Final Design",

            meta: "Material Savings: 23.40%, Stiffness Loss: 23.40%",

            description:
                "<p>Final optimized geometry selected based on performance and manufacturability.</p>"
        }

    ];


    /*
     * ========================================
     * UPDATE ITERATION
     * ========================================
     */

    function updateIteration(index) {

        const iteration = iterations[index];

        const previousIndex =
            Math.max(0, index - 1);

        const previousIteration =
            iterations[previousIndex];


        /*
         * Update images
         */

        currentImage.src =
            iteration.image;

        previousImage.src =
            previousIteration.image;


        /*
         * Update technical information
         */

        iterationNumber.textContent =
            "ITERATION " + (index + 1) + " / 6";

        detailTitle.textContent =
            iteration.title;

        detailMeta.textContent =
            iteration.meta;

        detailDesc.innerHTML =
            iteration.description;


        /*
         * Onion-skin behavior
         */

        if (index === 0) {

            previousImage.style.opacity = "0";

        } else {

            previousImage.style.opacity = "0.25";

        }

    }


    /*
     * ========================================
     * SLIDER
     * ========================================
     */

    slider.addEventListener("input", function () {

        const index =
            parseInt(this.value);

        updateIteration(index);

    });


    /*
     * Initial state
     */

    updateIteration(0);

});
