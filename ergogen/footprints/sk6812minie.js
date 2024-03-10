module.exports = {
    params: {
        designator: 'LED',
        VCC: {type: 'net', value: 'VCC'},
        din: undefined,
        dout: undefined,
        GND: {type: 'net', value: 'GND'},
    },
    
    body: p => `
    
        (module WS2812B (layer F.Cu) (tedit 53BEE615)

            ${p.at /* parametric position */}

            ${'' /* footprint reference */}
  (fp_text reference "L9" (at -1.5 3.5 -180) (layer "F.SilkS") hide (effects (font (size 1 1) (thickness 0.15))) (tstamp 85adac84-19fd-4e41-8a67-4177c4373ff9))
  (fp_text value "SK6812Mini-e" (at 0 -3.5 -180) (layer "F.Fab") hide (effects (font (size 1 1) (thickness 0.15))) (tstamp 15c6a2e7-63ec-4749-b0f2-ba5898159986))
  (fp_line (start 1.7 0.4002) (end 3.4502 0.4002) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (tstamp 9a43d18c-c556-4970-942e-46fe2f9d2758))
  (fp_line (start 1.7 1.5498) (end 3.4502 1.5498) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (tstamp 51d5f69c-eff9-469a-98f2-47742f3b89e2))
  (fp_line (start 3.4502 1.5498) (end 3.4502 0.4002) (stroke (width 0.12) (type solid)) (layer "B.SilkS") (tstamp 2890c4c0-0bd8-4570-8634-b3e1b2c95aa1))
  (fp_line (start 3.45 -1.3502) (end 1.7 -1.3502) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 12be332a-6231-4c72-b9fc-ed11b103331c))
  (fp_line (start 3.45 -0.2002) (end 1.7 -0.2002) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 5cc214f5-68dc-4086-ad3e-b17ae88da298))
  (fp_line (start 3.45 -0.2002) (end 3.45 -1.3502) (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 1be1c30b-5079-47b6-9413-b40e288e55f6))
  (fp_poly
    (pts
      (xy -3.25 -1.15)
      (xy -1.75 -1.15)
      (xy -1.75 -0.4)
      (xy -3.25 -0.4)
    )
    (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (tstamp 13504f29-3a67-4492-a47a-47238d185b7e))

  (fp_poly
    (pts
      (xy -3.25 0.6)
      (xy -1.75 0.6)
      (xy -1.75 1.35)
      (xy -3.25 1.35)
    )
    (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (tstamp a1f584bc-bd7c-46ab-aaa9-671001896599))

  (fp_poly
    (pts
      (xy 1.75 -1.15)
      (xy 3.25 -1.15)
      (xy 3.25 -0.4)
      (xy 1.75 -0.4)
    )
    (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (tstamp 3c9ee8bb-584b-4322-bb9b-ee8c6aa3e6f3))
  (fp_poly
    (pts
      (xy 1.75 0.6)
      (xy 3.25 0.6)
      (xy 3.25 1.1)
      (xy 3 1.35)
      (xy 1.75 1.35)
    )

    (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (tstamp 56f47df6-a1f3-49cd-a806-0fbdafadff9c))
  (fp_poly
    (pts
      (xy -3.25 -1.15)
      (xy -1.75 -1.15)
      (xy -1.75 -0.4)
      (xy -3.25 -0.4)
    )

    (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (tstamp 8978dbea-f5ec-4aac-8351-4ce0e0ef590a))
  (fp_poly
    (pts
      (xy -3.25 0.6)
      (xy -1.75 0.6)
      (xy -1.75 1.35)
      (xy -3.25 1.35)
    )

    (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (tstamp 0d29a607-9ebe-4f8c-bfc5-5b334819f2f6))
  (fp_poly
    (pts
      (xy 1.75 0.6)
      (xy 3.25 0.6)
      (xy 3.25 1.35)
      (xy 1.75 1.35)
    )

    (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (tstamp 69a68f92-cfb2-4cc6-b718-7fc0127870ea))
  (fp_poly
    (pts
      (xy 1.75 -1.15)
      (xy 3 -1.15)
      (xy 3.25 -0.9)
      (xy 3.25 -0.4)
      (xy 1.75 -0.4)
    )

    (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (tstamp 8de92c98-4021-4da0-9585-aa1a1063f98b))
  (fp_line (start -0.3 0.14) (end 0.3 0.14)
    (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (tstamp 08157b8c-d172-47e2-98e1-b96efa9d457d))
  (fp_line (start 0 0.44) (end 0 -0.16)
    (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (tstamp ce50de0b-710a-4cc6-b6bf-457b3ec8444d))
      (fp_line (start -1.7 -1.55) (end -1.7 1.55) (layer Edge.Cuts) (width 0.12))
      (fp_line (start -1.7 1.55) (end 1.7 1.55) (layer Edge.Cuts) (width 0.12))
      (fp_line (start 1.7 1.55) (end 1.7 -1.55) (layer Edge.Cuts) (width 0.12))
      (fp_line (start 1.7 -1.55) (end -1.7 -1.55) (layer Edge.Cuts) (width 0.12))
  (fp_circle (center 0 0.1) (end 0 -1.4)
    (stroke (width 0.1) (type solid)) (fill none) (layer "F.Fab") (tstamp 87725bf5-6845-4546-b957-2e74586bb80f))
  (pad "1" smd custom (at -2.5 -0.775 ${p.rot}) (size 1.6 0.85) (layers "B.Cu")
    (zone_connect 2) (thermal_bridge_angle 45)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.525 0.8958)
          (xy 0.1694 0.8958)
          (xy 0.1694 0.325)
          (xy 0.525 0.325)
        )
        (width 0.1) (fill yes))
    ) (tstamp 5d25e0d9-8895-4468-8ed8-9fc09f7e960f) ${p.VCC.str})
  (pad "1" smd custom (at -2.5 0.975 ${p.rot}) (size 1.6 0.85) (layers "F.Cu")
    (zone_connect 2) (thermal_bridge_angle 45)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.5306 -0.275)
          (xy 0.175 -0.275)
          (xy 0.175 -0.898)
          (xy 0.5306 -0.898)
        )
        (width 0.1) (fill yes))
    ) (tstamp df6c2d8a-9a8d-4956-a9cd-7fb0266e9cf5) ${p.VCC.str})
  (pad "1" thru_hole circle (at -2.15 0.1 180) (size 0.4572 0.4572) (drill 0.3048) (layers "*.Cu") (tstamp f3379097-231c-4b54-8a0f-53d88c25c42d) ${p.VCC.str})
  (pad "2" thru_hole circle (at -2.95 0.1 180) (size 0.4572 0.4572) (drill 0.3048) (layers "*.Cu") (tstamp 26ed2143-1784-4c64-9282-f7e92e5a82e1) ${p.dout.str})
  (pad "2" smd custom (at -2.5 -0.775 ${180+p.rot}) (size 1.6 0.85) (layers "F.Cu")
    (zone_connect 2) (thermal_bridge_angle 45)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.6324 -0.2956)
          (xy 0.2768 -0.2956)
          (xy 0.2768 -0.8688)
          (xy 0.6324 -0.8688)
        )
        (width 0.1) (fill yes))
    ) (tstamp d3f16501-cb11-42ca-b6a3-7558ed5829c0) ${p.dout.str})
  (pad "2" smd custom (at -2.5 0.975 ${180+p.rot}) (size 1.6 0.85) (layers "B.Cu")
    (zone_connect 2) (thermal_bridge_angle 45)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.6324 0.8884)
          (xy 0.2768 0.8884)
          (xy 0.2768 0.325)
          (xy 0.6324 0.325)
        )
        (width 0.1) (fill yes))
    ) (tstamp 358d0f70-bc67-4762-8710-7eb25bd746a0) ${p.dout.str})
  (pad "3" smd custom (at 2.5 -0.775 ${180+p.rot}) (size 1.6 0.85) (layers "F.Cu")
    (zone_connect 2) (thermal_bridge_angle 45)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy -0.226 -0.3536)
          (xy -0.5816 -0.3536)
          (xy -0.5816 -0.887)
          (xy -0.226 -0.887)
        )
        (width 0.1) (fill yes))
    ) (tstamp 72d5ccd6-8658-46d4-9003-5b2cb66342ac) ${p.GND.str})
  (pad "3" smd custom (at 2.5 0.975 ${180+p.rot}) (size 1.6 0.85) (layers "B.Cu")
    (zone_connect 2) (thermal_bridge_angle 45)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy -0.2222 0.8884)
          (xy -0.5778 0.8884)
          (xy -0.5816 0.325)
          (xy -0.226 0.325)
        )
        (width 0.1) (fill yes))
    ) (tstamp 61a4e047-8912-4d8e-892d-3dbbd6de594f) ${p.GND.str})
  (pad "3" thru_hole circle (at 2.9 0.1 180) (size 0.4572 0.4572) (drill 0.3048) (layers "*.Cu") (tstamp 81fa7420-087f-4081-95e1-f19e774d15ee) ${p.GND.str})
  (pad "4" thru_hole circle (at 2.15 0.1 180) (size 0.4572 0.4572) (drill 0.3048) (layers "*.Cu") (tstamp f94d208e-fc61-4e6c-b37d-4634e4dca461) ${p.din.str})
  (pad "4" smd custom (at 2.5 -0.775 ${p.rot}) (size 1.6 0.85) (layers "B.Cu")
    (zone_connect 2) (thermal_bridge_angle 45)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy -0.175 0.8862)
          (xy -0.5306 0.8862)
          (xy -0.5306 0.175)
          (xy -0.175 0.175)
        )
        (width 0.1) (fill yes))
    ) (tstamp ac255406-07fe-4e86-8928-a1a1ec23841a) ${p.din.str})
  (pad "4" smd custom (at 2.5 0.975 ${p.rot}) (size 1.6 0.85) (layers "F.Cu")
    (zone_connect 2) (thermal_bridge_angle 45)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy -0.175 -0.175)
          (xy -0.5306 -0.178)
          (xy -0.5306 -0.9026)
          (xy -0.175 -0.9056)
        )
        (width 0.1) (fill yes))
    ) (tstamp 0b87269f-434c-470e-a48b-8b82d2485688) ${p.din.str})
)
`
}
