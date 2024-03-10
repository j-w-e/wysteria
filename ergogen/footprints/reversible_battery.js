module.exports = {
    params: {
        designator: 'JST',
        reverse: true,
        side: "F",
        pos: undefined,
        neg: undefined,
    },
    body: p => {
        const pad = (pnum, num, text, net) => {
            if (num >= 2 && !p.reverse) return ''
            const dist = 2
            let x = p.reverse ? -dist : -dist/2;
            x += dist*num
            return `
                (fp_text user "${text}" (at ${x} 1.8 ${p.rot}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ))
                (fp_text user "${text}" (at ${x} 1.8 ${p.rot}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))
                (pad ${pnum} thru_hole roundrect (at ${x} 0 ${p.rot}) (size 1.50 2.25) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${net.str})
            `
        }

        return `
            (module lib:bat (layer F.Cu) (tstamp 5BF2CC94)
                ${p.at /* parametric position */}

                ${'' /* footprint reference */}
                (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
                (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

                ${''/* battery pads */}
                ${pad(1, 0, 'B+', p.pos)}
                ${pad(2, 1, 'B-', p.neg)}
                ${pad(1, 2, 'B+', p.pos)}
            )
        `
    }
}
