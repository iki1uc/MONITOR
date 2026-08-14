function build81(ursache) {

    let impuls = ursache;

    let signal = {
        monitor: "sichtbar",
        report: "anwesend",
        log: "eingetragen",
        echo: "rückgemeldet",
        trace: "verfolgt"
    };

    let identity = {
        core: "81",
        role: "mein630",
        state: "aktiv",
        ready: "100%",
        loc: "/81/"
    };

    let abbildung = {
        stage: "aktiv",
        orbit: 0,
        delta: impuls,
        praesenz: ["1X", "X4", "IX", "XI"]
    };

    return {signal, identity, abbildung};
}

