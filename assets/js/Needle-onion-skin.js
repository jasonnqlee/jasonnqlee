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

            title: "Existing Design",

            meta: "Baseline geometry",

            description:
                "<p>+ Baseline design from Insulet. Reliable and proven. Baseline for subsequent optimization.</p>"
        },


        {
            image: "images/NeedleCap/Iteration-1.png",

            title: "W design V1",

            meta: "Material savings: 0.04099in^3 -18.02%, Stiffness Loss:xxx%",

            description:
                "<p>+ W-shape design keeps central area wide, while outer prongs help support it during linear feeding.</p>"
        },


        {
            image: "images/NeedleCap/Iteration-2.png",

            title: "Iteration 2",

            meta: "Geometry refinement",

            description:
                "<p>Further refinement of the geometry based on FEA results.</p>"
        },


        {
            image: "images/NeedleCap/Iteration-3.png",

            title: "Iteration 3",

            meta: "Structural optimization",

            description:
                "<p>Material was redistributed to improve stiffness-to-mass performance.</p>"
        },


        {
            image: "images/NeedleCap/Iteration-4.png",

            title: "Iteration 5",

            meta: "Final refinement",

            description:
                "<p>Additional refinement before the final design selection.</p>"
        },


        {
            image: "images/NeedleCap/Iteration-5.png",

            title: "Final Design",

            meta: "Selected design",

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
