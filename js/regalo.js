const container = document.querySelector(".sunflowers-container");

for (let i = 0; i < 3; i++) {
    const sunflower = document.createElement("div");
    sunflower.classList.add("sunflower");

    const wrapper = document.createElement("div");
    wrapper.classList.add("flower_wrapper");

    // Tallo
    const stem = document.createElement("div");
    stem.classList.add("flower_stem");
    wrapper.appendChild(stem);

    // Centro
    const center = document.createElement("div");
    center.classList.add("flower_center");
    wrapper.appendChild(center);

    // Pétalos
    for (let k = 0; k < 12; k++) {
        const petal = document.createElement("div");
        petal.classList.add("flower_petal");
        petal.style.setProperty('--rotation', `${k*30}deg`);
        petal.style.animationDelay = `${0.1 * k}s`;
        wrapper.appendChild(petal);
    }

    // Hojas
    for (let l = 0; l < 2; l++) {
        const leaf = document.createElement("div");
        leaf.classList.add("flower_leaf");
        leaf.style.setProperty('--rotation', l === 0 ? '45deg' : '-45deg');
        wrapper.appendChild(leaf);
    }

    sunflower.appendChild(wrapper);
    container.appendChild(sunflower);
}