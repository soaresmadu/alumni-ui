"use client";

import { LuSwords } from 'react-icons/lu';
import LogoLoop from '../ReactBitsConfig/LogoLoop';
import { GiShieldBash, GiSwordsEmblem, GiSwordwoman } from 'react-icons/gi';

export default function BarraUI() {

    const techLogos = [
        { node: <GiShieldBash />, title: "", href: "" },
        { node: <LuSwords />, title: "", href: "" },
        { node: <GiSwordwoman />, title: "", href: "" },
        { node: <GiSwordsEmblem />, title: "", href: "" },
    ];

    return (
        <div style={{ height: 'auto', position: 'relative', overflow: 'hidden', backgroundColor: '#050505' }}>
            <LogoLoop
                logos={techLogos}
                speed={90}
                direction="left"
                logoHeight={38}
                gap={60}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#050505"
                ariaLabel="Technology partners"
            />
        </div>
    );
}
