module.exports = {
    params: {
        designator: 'B', // for Button
        side: 'F',
        from: undefined,
        to: undefined
    },
    body: p => `
    
    (module E73:SW_TACT_ALPS_SKQGABE010 (layer F.Cu) (tstamp 5BF2CC94)

        (descr "Low-profile thru_hole Tactile Switch")

        ${p.at /* parametric position */}
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
        
        ${'' /* pins */}
        (pad 1 thru_hole circle (at -3.25 -2.25 ${p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.Mask") ${p.from.str})
        (pad 1 thru_hole circle (at 3.25 -2.25 ${p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.Mask") ${p.from.str})
        (pad 2 thru_hole circle (at -3.25 2.25 ${p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.Mask") ${p.to.str})
        (pad 2 thru_hole circle (at 3.25 2.25 ${p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.Mask") ${p.to.str})
        (fp_text user "RESET" (at 0 0 ${p.rot}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15)) ))
    )
    
    `
}
