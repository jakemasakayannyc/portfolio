import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './MacBookAir1.module.css';

interface Props {
  className?: string;
}
/* @figmaId 201:4 */
export const MacBookAir1: FC<Props> = memo(function MacBookAir1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.jakeMasakayanIsAGraphicDesigne}>
        Jake Masakayan is a graphic designer based in Brooklyn who specializes in creating cohesive brand identities,
        digital design, editorial design, and art direction. In 2019, he received a BFA in Design from the School of
        Visual Arts in New York. He was a finalist in the AIGA&#39;s Command X competition. Throughout his 4+ years of
        studio experience and multiple internships, he has worked with a large variety of clients in various sectors
        from a local to a global scale.
      </div>
      <div className={classes.studioExperience}>Studio Experience</div>
      <div className={classes.cottonDesignFreelanceOtherward}>
        <div className={classes.textBlock}>Cotton Design, Freelance</div>
        <div className={classes.textBlock2}>Otherward, Senior Designer</div>
        <div className={classes.textBlock3}>Noë &amp; Associates, Designer</div>
        <div className={classes.textBlock4}>Pentagram, Design Intern</div>
        <div className={classes.textBlock5}>2x4, Freelance</div>
        <div className={classes.textBlock6}>Gretel, Design Intern</div>
        <div className={classes.textBlock7}>Team Epiphany, Design Intern</div>
        <div className={classes.textBlock8}>Papermum Press, Assistant</div>
        <div className={classes.textBlock9}>GKC Advertising, Design Intern</div>
      </div>
      <div className={classes.inDesignAfterEffectsPremierePr}>
        <div className={classes.textBlock10}>InDesign</div>
        <div className={classes.textBlock11}>After Effects</div>
        <div className={classes.textBlock12}>Premiere Pro</div>
        <div className={classes.textBlock13}>Photoshop</div>
        <div className={classes.textBlock14}>Illustrator</div>
        <div className={classes.textBlock15}>Adobe XD</div>
        <div className={classes.textBlock16}>Figma</div>
      </div>
      <div className={classes.proficiencies}>Proficiencies</div>
      <div className={classes.designJakemasakayanComRequestP}>
        <div className={classes.textBlock17}>design@jakemasakayan.com</div>
        <div className={classes.textBlock18}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>Request Portfolio</span>
          </p>
        </div>
      </div>
      <div className={classes.contact}>Contact</div>
      <div className={classes.dueWestEducationForFreedomsPho}>
        <div className={classes.textBlock19}>Due West Education</div>
        <div className={classes.textBlock20}>For Freedoms</div>
        <div className={classes.textBlock21}>Phosis Skincare</div>
        <div className={classes.textBlock22}>MAPS (Nonprofit)</div>
        <div className={classes.textBlock23}>Frame Hotels</div>
        <div className={classes.textBlock24}>Big Spaceship</div>
        <div className={classes.textBlock25}>Berggruen Institute</div>
        <div className={classes.textBlock26}>Dinex Group/Daniel Boulud</div>
        <div className={classes.textBlock27}>Humanrace by Pharrell</div>
        <div className={classes.textBlock28}>Moose Knuckles</div>
        <div className={classes.textBlock29}>Related Companies</div>
        <div className={classes.textBlock30}>Kanai Auberge Resorts</div>
        <div className={classes.textBlock31}>Aman Resorts</div>
        <div className={classes.textBlock32}>Douglas Elliman</div>
        <div className={classes.textBlock33}>Waldorf Astoria</div>
        <div className={classes.textBlock34}>Armani Casa</div>
        <div className={classes.textBlock35}>Yolélé Foods</div>
        <div className={classes.textBlock36}>Parsons New School</div>
        <div className={classes.textBlock37}>New York University</div>
        <div className={classes.textBlock38}>The New York Times</div>
        <div className={classes.textBlock39}>Axos Bank</div>
        <div className={classes.textBlock40}>Hart Bagari</div>
        <div className={classes.textBlock41}>Heineken</div>
        <div className={classes.textBlock42}>Mattel</div>
      </div>
      <div className={classes.clients}>Clients</div>
    </div>
  );
});
