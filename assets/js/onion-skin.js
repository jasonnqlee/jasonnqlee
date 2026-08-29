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
            image: "images/iteration-1.png",

            title: "Initial Design",

            meta: "Baseline geometry",

            description:
                "<p>Initial design concept used as the baseline for subsequent optimization.</p>"
        },


        {
            image: "images/iteration-2.png",

            title: "Iteration 2",

            meta: "First geometry revision",

            description:
                "<p>Modified geometry to reduce material usage while maintaining structural performance.</p>"
        },


        {
            image: "images/iteration-3.png",

            title: "Iteration 3",

            meta: "Geometry refinement",

            description:
                "<p>Further refinement of the geometry based on FEA results.</p>"
        },


        {
            image: "images/iteration-4.png",

            title: "Iteration 4",

            meta: "Structural optimization",

            description:
                "<p>Material was redistributed to improve stiffness-to-mass performance.</p>"
        },


        {
            image: "images/iteration-5.png",

            title: "Iteration 5",

            meta: "Final refinement",

            description:
                "<p>Additional refinement before the final design selection.</p>"
        },


        {
            image: "images/iteration-6.png",

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
