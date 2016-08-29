import {Injectable} from '@angular/core';
export class Fermentables{

constructor(){
  this.fermentables = {
      "Acid Malt": {
        "Origin": "Germany",
        "Mash?": "X",
        "Color": 3,
        "Power": 0,
        "Potential": 1.027,
        "Max": 10,
        "Notes": "Acid malt contains acids from natural lactic acids. Used by German brewers to adjust malt PH without chemicals to adhere to German purity laws. Also enhances the head retention.'"
      },
      "Acidulated (Weyermann)": {
        "Origin": "Germany",
        "Mash?": 0,
        "Color": 1.8,
        "Power": 0,
        "Potential": 1.03,
        "Max": 10,
        "Notes": "Used in Germany to lower PH levels without resorting to chemicals. Lowers mash pH levels, lightens color, improves flavor stability."
      },
      "Acidulated Malt": {
        "Origin": "German",
        "Mash?": 0,
        "Color": 3.4,
        "Power": 0,
        "Potential": 0,
        "Max": 0,
        "Notes": 0
      },
      "Amber Malt": {
        "Origin": "United Kingdom",
        "Mash?": "X",
        "Color": 22,
        "Power": 20,
        "Potential": 1.035,
        "Max": 20,
        "Notes": "Roasted specialty malt used in some English browns, milds and old ales to add color and a biscuit taste. Intense flavor - so limit use. Low diastatic power so must be mashed with well modified malts."
      },
      "Aromatic Malt": {
        "Origin": "Belgium",
        "Mash?": "X",
        "Color": 26,
        "Power": 29,
        "Potential": 1.036,
        "Max": 10,
        "Notes": "Provides a very strong malt flavor and aroma to your beer."
      },
      "Barley, Flaked": {
        "Origin": "US",
        "Mash?": "X",
        "Color": 1.7,
        "Power": 0,
        "Potential": 1.032,
        "Max": 20,
        "Notes": "Adds significant body to Porters and Stouts. High haze producing protein prevents use in light beers."
      },
      "Barley, Raw": {
        "Origin": "US",
        "Mash?": "X",
        "Color": 2,
        "Power": 0,
        "Potential": 1.028,
        "Max": 15,
        "Notes": "Raw, unmalted barley can be used to add body to your beer. Use in homebrew requires very fine milling combined with a decoction or multi-stage mash. Performs best when used in small quantities with well modified grains."
      },
      "Barley, Roasted": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 300,
        "Power": 0,
        "Potential": 1.025,
        "Max": 10,
        "Notes": "Roasted at high temperature to create a burnt, grainy, coffee like flavor. Imparts a red to deep brown color to beer, and very strong roasted flavor. Use 2-4% in Brown ales to add a nutty flavor, or 3-10% in Porters and Stouts for coffee flavor."
      },
      "Barley, Torrefied": {
        "Origin": "US",
        "Mash?": "X",
        "Color": 1.7,
        "Power": 0,
        "Potential": 1.036,
        "Max": 40,
        "Notes": "Raw barley that has been \"popped\" open to open kernels Used in place of raw barley for faster conversion and higher yields. High in haze producing protein"
      },
      "Belgian Debittered Black Malt": {
        "Origin": 0,
        "Mash?": 0,
        "Color": 550,
        "Power": 0,
        "Potential": 1.01,
        "Max": 0,
        "Notes": 0
      },
      "Biscuit Malt": {
        "Origin": "Belgian",
        "Mash?": "X",
        "Color": 23,
        "Power": 6,
        "Potential": 1.036,
        "Max": 10,
        "Notes": "Use for English ales, brown ales and porters. Adds a biscuit like flavor and aroma. Can be used as a substitute for toasted malt."
      },
      "Black (Patent) Malt": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 500,
        "Power": 0,
        "Potential": 1.025,
        "Max": 10,
        "Notes": "Dark color and dry roasted flavor characteristic of Stouts and Porters Use for: Coloring in small amounts, or flavoring of Stouts and Porters in larger amounts."
      },
      "Black Barley (Stout)": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 500,
        "Power": 0,
        "Potential": 1.025,
        "Max": 10,
        "Notes": "Unmalted barley roasted at high temperature to create a dry, coffee like flavor. Imparts a sharp acrid flavor characteristic of dry stouts. Gives \"dryness\" to a stout or porter -- much more so than regular Roasted Barley"
      },
      "Blackprinz Malt (Briess)": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 500,
        "Power": 0,
        "Potential": 1.033,
        "Max": 10,
        "Notes": "Dehusked Black Malt, similar to Weyermann CARAFA' Special. Very delicate roasted flavors. No astrigent or bitter aftertaste. Color: 500 L"
      },
      "Brewers Malt 6-Row (Briess)": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 1.8,
        "Power": 160,
        "Potential": 1.036,
        "Max": 100,
        "Notes": "Flavor:Mild Grainy Malty More husk than 2-row, well suited for high adjunct brewing"
      },
      "Brown Malt": {
        "Origin": "United Kingdom",
        "Mash?": "X",
        "Color": 65,
        "Power": 0,
        "Potential": 1.032,
        "Max": 10,
        "Notes": "Imparts a dry, biscuit flavor. Used in nut brown ales, porters and some Belgian ales."
      },
      "Brumalt": {
        "Origin": "Germany",
        "Mash?": "X",
        "Color": 23,
        "Power": 0,
        "Potential": 1.033,
        "Max": 10,
        "Notes": "Dark German malt developed to add malt flavor of Alt, Marzen and Oktoberfest beers. Helps create authentic maltiness without having to do a decoction mash. Rarely available for homebrewers."
      },
      "Cara-Pils/Dextrine": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 2,
        "Power": 0,
        "Potential": 1.033,
        "Max": 20,
        "Notes": "Significantly increases foam/head retention and body of the beer. Also sold under the names \"Dextrine\" and \"Cara-Foam"
      },
      "Caraamber": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 30,
        "Power": 0,
        "Potential": 1.035,
        "Max": 20,
        "Notes": "Adds body, color and improves head retention. Also called \"Crystal\" malt."
      },
      "Caraaroma": {
        "Origin": "Germany",
        "Mash?": 0,
        "Color": 130,
        "Power": 0,
        "Potential": 1.035,
        "Max": 15,
        "Notes": "Very dark crystal malt - similar to a crystal 120 or Caramunich 120 malt. Adds strong caramel flavor, red color, and malty aroma."
      },
      "Carafa I": {
        "Origin": "Germany",
        "Mash?": 0,
        "Color": 337,
        "Power": 0,
        "Potential": 1.032,
        "Max": 5,
        "Notes": "Used to intensify aroma and color in dark, Munich beers and stouts."
      },
      "Carafa I (Weyermann)": {
        "Origin": "Germany",
        "Mash?": 0,
        "Color": 320,
        "Power": 0,
        "Potential": 1.036,
        "Max": 5,
        "Notes": "Chocolate malt. Dark beers, Alts, Bockbiers. Adds color and aroma.'"
      },
      "Carafa II": {
        "Origin": "Germany",
        "Mash?": 0,
        "Color": 412,
        "Power": 0,
        "Potential": 1.032,
        "Max": 5,
        "Notes": "Used to intensify aroma and color in dark, Munich beers and stouts."
      },
      "Carafa III": {
        "Origin": "Germany",
        "Mash?": 0,
        "Color": 525,
        "Power": 0,
        "Potential": 1.032,
        "Max": 5,
        "Notes": "Dark color and aroma - used in some German beers"
      },
      "Carafa Special I (Weyermann)": {
        "Origin": "Germany",
        "Mash?": 0,
        "Color": 320,
        "Power": 0,
        "Potential": 1.036,
        "Max": 5,
        "Notes": "Chocolate malt. Dark beers, Alts, Bockbiers. Adds color and aroma. De-husked, smoother tasting"
      },
      "Carafa Special II (Weyermann)": {
        "Origin": "Germany",
        "Mash?": 0,
        "Color": 415,
        "Power": 0,
        "Potential": 1.036,
        "Max": 5,
        "Notes": "De-husked chocolate malt for a smoother flavor. Adds body, color, aroma. Dark beers, Alts, Bockbiers"
      },
      "Carafoam": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 2,
        "Power": 0,
        "Potential": 1.033,
        "Max": 20,
        "Notes": "Significantly increases foam/head retention and body of the beer. Also sold under the names \"Dextrine\" and \"Cara-Pils (TM)"
      },
      "Caramel / Crystal 60L": {
        "Origin": "American",
        "Mash?": 0,
        "Color": 60,
        "Power": 0,
        "Potential": 0,
        "Max": 0,
        "Notes": 0
      },
      "Caramel Malt - 120L (Briess)": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 120,
        "Power": 0,
        "Potential": 1.032,
        "Max": 0,
        "Notes": "Pronounced Caramel, Burnt Sugar, Raisiny, Prunes Deep Red Color 3-15% in Amber &Red beers. 10-15% in Bock 7-15% in Dark beers 10-15% in Porter &Stout"
      },
      "Caramel Malt - 80L 6-Row (Briess)": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 80,
        "Power": 0,
        "Potential": 1.033,
        "Max": 0,
        "Notes": "Pronounced Caramel, Slight Burnt Sugar, Raisniny, PruneRed to Deep Red3-15% in Amber and Red beers.10-15% in Bock beers.7-15% in Dark beers.10-15% in Porter and Stout."
      },
      "Caramel Wheat Malt": {
        "Origin": "Germany",
        "Mash?": 0,
        "Color": 46,
        "Power": 0,
        "Potential": 1.035,
        "Max": 15,
        "Notes": "Caramel wheat malt - emphasizes wheat malt aroma and adds color to the beer. Popular for Dunkelweizens. Also known as Carawheat -- which is a registered trademark of Wyermann Malting."
      },
      "Caramel/Crystal Malt - 10L": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 10,
        "Power": 0,
        "Potential": 1.035,
        "Max": 20,
        "Notes": "Adds body, color and improves head retention. Also called \"Crystal\" malt."
      },
      "Caramel/Crystal Malt - 150L": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 150,
        "Power": 0,
        "Potential": 1.035,
        "Max": 20,
        "Notes": "Adds body, color and improves head retention. Also called \"Crystal\" malt."
      },
      "Caramel/Crystal Malt - 15L": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 15,
        "Power": 0,
        "Potential": 1.035,
        "Max": 20,
        "Notes": "Adds body, color and improves head retention. Also called \"Crystal\" malt."
      },
      "Caramel/Crystal Malt - 20L": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 20,
        "Power": 0,
        "Potential": 1.035,
        "Max": 20,
        "Notes": "Adds body, color and improves head retention. Also called \"Crystal\" malt."
      },
      "Caramel/Crystal Malt - 30L": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 30,
        "Power": 0,
        "Potential": 1.035,
        "Max": 20,
        "Notes": "Adds body, color and improves head retention. Also called \"Crystal\" malt."
      },
      "Caramel/Crystal Malt - 40L": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 40,
        "Power": 0,
        "Potential": 1.034,
        "Max": 20,
        "Notes": "Adds body, color and improves head retention. Also called \"Crystal\" malt."
      },
      "Caramel/Crystal Malt - 60L": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 60,
        "Power": 0,
        "Potential": 1.034,
        "Max": 20,
        "Notes": "Adds body, color and improves head retention. Also called \"Crystal\" malt."
      },
      "Caramel/Crystal Malt - 80L": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 80,
        "Power": 0,
        "Potential": 1.034,
        "Max": 20,
        "Notes": "Adds body, color and improves head retention. Also called \"Crystal\" malt."
      },
      "Caramel/Crystal Malt - 90L": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 90,
        "Power": 0,
        "Potential": 1.034,
        "Max": 20,
        "Notes": "Adds body, color and improves head retention. Also called \"Crystal\" malt."
      },
      "Caramel/Crystal Malt -120L": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 120,
        "Power": 0,
        "Potential": 1.033,
        "Max": 20,
        "Notes": "Adds body, color and improves head retention. Also called \"Crystal\" malt. Very Dark"
      },
      "Caramunich I (Weyermann)": {
        "Origin": "Germany",
        "Mash?": 0,
        "Color": 34.5,
        "Power": 0,
        "Potential": 1.036,
        "Max": 10,
        "Notes": "German crystal malt. Adds maltiness, flavor, color and aroma.'"
      },
      "CaraMunich III": {
        "Origin": "German",
        "Mash?": 0,
        "Color": 57,
        "Power": 0,
        "Potential": 0,
        "Max": 0,
        "Notes": 0
      },
      "Caramunich Malt": {
        "Origin": "Belgium",
        "Mash?": 0,
        "Color": 56,
        "Power": 0,
        "Potential": 1.033,
        "Max": 10,
        "Notes": "Caramel, copper colored malt. Used in Belgian ales and German bocks."
      },
      "Carapils (Briess)": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 1.5,
        "Power": 0,
        "Potential": 1.034,
        "Max": 0,
        "Notes": "FLAVOR: None COLOR: None ITEM NUMBERS AND PACKAGING OPTIONS adds body, foam retention, and beer stability without influencing color or flavor. non-fermentables to balance body and flavor of dark beers Low usage of 1-5% will help achieve desired resu"
      },
      "Carapils (Dextrine Malt)": {
        "Origin": "American",
        "Mash?": 0,
        "Color": 1.8,
        "Power": 0,
        "Potential": 0,
        "Max": 0,
        "Notes": 0
      },
      "Carapils 6-Row (Briess)": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 1.3,
        "Power": 0,
        "Potential": 1.034,
        "Max": 0,
        "Notes": "FLAVOR: NoneCOLOR: NoneITEM NUMBERS AND PACKAGING OPTIONSadds body, foam retention, and beer stability without influencing color or flavor.non-fermentables to balance body and flavor of dark beersLow usage of 1-5% will help achieve desired resu"
      },
      "Carared": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 20,
        "Power": 0,
        "Potential": 1.035,
        "Max": 20,
        "Notes": "Adds body, color and improves head retention. Also called \"Crystal\" malt."
      },
      "Caravienne Malt": {
        "Origin": "Belgium",
        "Mash?": 0,
        "Color": 22,
        "Power": 0,
        "Potential": 1.034,
        "Max": 10,
        "Notes": "Light Belgian crystal malt. Used in light Trappist and Abbey style Belgian ales."
      },
      "CH'TEAU SPELT": {
        "Origin": "Belgium",
        "Mash?": 0,
        "Color": 3.55,
        "Power": 0,
        "Potential": 1,
        "Max": 0,
        "Notes": "Features: Ch'teau Spelt is a pale, well-modified type of malt. Made from a hard-grained species of wheat (heirloom wheat), it has a higher protein level when compared to other wheat malts. Characteristics: Ch'teau Spelt malt imparts a sweet nutty flavor, adds a spicy aroma and an earthy character to your beer. Great for Belgian Saison and Wheat beer styles. Usage: Belgian saison, wheat beers, special beers. 3 '7 EBC (European Brewing Convention) 1.7 '3.2 'L (Lovibond) Moisture % 6.0 Extract (dry basis) % 79 Wortcolour EBC ('L) 3 (1.7) -7 (3.2) Total Protein (dry malt) % 17.0"
      },
      "Chocolate (Dingemans)": {
        "Origin": "Belgium",
        "Mash?": 0,
        "Color": 340,
        "Power": 0,
        "Potential": 1.03,
        "Max": 50,
        "Notes": 0
      },
      "Chocolate Malt": {
        "Origin": "United Kingdom",
        "Mash?": 0,
        "Color": 450,
        "Power": 0,
        "Potential": 1.034,
        "Max": 10,
        "Notes": "Dark malt that gives a rich red or brown color and nutty flavor. Use for: Brown ales, porters, some stouts Maintains some malty flavor, not as dark as roasted malt."
      },
      "Chocolate Malt (Muntons)": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 385,
        "Power": 0,
        "Potential": 1.028,
        "Max": 10,
        "Notes": "Dark malt that gives a rich red or brown color and nutty flavor. Use for: Brown ales, porters, some stouts Maintains some malty flavor, not as dark as roasted malt."
      },
      "Chocolate Malt (Thomas Fawcett)": {
        "Origin": "United Kingdom",
        "Mash?": 0,
        "Color": 508,
        "Power": 0,
        "Potential": 1.034,
        "Max": 10,
        "Notes": "Dark chocolate malt from the UK. Adds strong coffee flavor to your beer."
      },
      "Chocolate Malt, Pale": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 225,
        "Power": 0,
        "Potential": 1.028,
        "Max": 10,
        "Notes": "Dark malt that gives a rich red or brown color and nutty flavor. Use for: Brown ales, porters, some stouts Maintains some malty flavor, not as dark as roasted malt. Lighter than normal chocolate malt."
      },
      "Chocolate Rye Malt": {
        "Origin": "Germany",
        "Mash?": 0,
        "Color": 250,
        "Power": 0,
        "Potential": 1.031,
        "Max": 5,
        "Notes": "Primarily used for color and aroma in top-fermented specialty beers."
      },
      "Chocolate Wheat Malt": {
        "Origin": "Germany",
        "Mash?": 0,
        "Color": 400,
        "Power": 0,
        "Potential": 1.033,
        "Max": 5,
        "Notes": "Intensifies aroma and color in top-fermented beers such as dark wheat beers."
      },
      "Corn - Yellow, Flaked (Briess)": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 1.3,
        "Power": 0,
        "Potential": 1.039,
        "Max": 0,
        "Notes": "produce a beer with a mild, less malty flavor produce a drier, more crisp beer. APPLICATIONS Use up to 40% as a cereal adjunct in the total grist"
      },
      "Corn, Flaked": {
        "Origin": "US",
        "Mash?": "X",
        "Color": 1.3,
        "Power": 0,
        "Potential": 1.037,
        "Max": 40,
        "Notes": "Generally a neutral flavor, used to reduce maltiness of beer Produces beer with a milder, less malty flavor Uses: Primarily for light Bohemian and Pilsner lagers"
      },
      "Crystal 40, 2-Row, (Great Western)": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 40,
        "Power": 0,
        "Potential": 1.032,
        "Max": 25,
        "Notes": "Crystal 40 (35-45'L)A fully modified and saccharified two-row crystal malt roasted to a target color of 40' ASBC. A versatile malt providing moderate color and caramel flavor.'"
      },
      "Crystal 60, 2-Row, (Great Western)": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 60,
        "Power": 0,
        "Potential": 1.032,
        "Max": 15,
        "Notes": "Crystal 60 (55-65'L) Similar to C40 but with a more extensive roasting to a target color of 60' ASBC. Has a more pronounced caramel flavor to coincide with the color.'"
      },
      "Crystal Malt - 60L (Thomas Fawcett)": {
        "Origin": "United Kingdom",
        "Mash?": 0,
        "Color": 60,
        "Power": 0,
        "Potential": 1.034,
        "Max": 10,
        "Notes": "Caramel or crystal malt from Thomas Fawcett. Adds Toffee caramel flavor. Improves head retention and body."
      },
      "Crystal, Extra Dark (Simpsons)": {
        "Origin": "UK",
        "Mash?": 0,
        "Color": 160,
        "Power": 0,
        "Potential": 1.035,
        "Max": 10,
        "Notes": "Very dark English crystal malt with deep amber color and burnt sugar and dark fruit flavors."
      },
      "Crystal, Medium (Simpsons)": {
        "Origin": "UK",
        "Mash?": 0,
        "Color": 55,
        "Power": 0,
        "Potential": 1.035,
        "Max": 20,
        "Notes": "Versatile English crystal malt imparts a rich gold to copper-red color and caramel flavor and increases foam stability."
      },
      "English Crystal, 50-60 L": {
        "Origin": 0,
        "Mash?": 0,
        "Color": 55,
        "Power": 0,
        "Potential": 1.034,
        "Max": 0,
        "Notes": 0
      },
      "Home Roasted Pilsner": {
        "Origin": "Florida",
        "Mash?": 0,
        "Color": 200,
        "Power": 0,
        "Potential": 1.03,
        "Max": 10,
        "Notes": "Extreme caramel aroma and flavored malt. Used in dark Belgian Abbey and Trappist ales. Unique flavor and aroma."
      },
      "Home Toasted/Roasted Munich Malt": {
        "Origin": "United Kingdom",
        "Mash?": 0,
        "Color": 27,
        "Power": 0,
        "Potential": 1.033,
        "Max": 10,
        "Notes": "Toasted in oven at 350 degrees for 30 minutes"
      },
      "Honey Malt": {
        "Origin": "Canada",
        "Mash?": "X",
        "Color": 25,
        "Power": 0,
        "Potential": 1.037,
        "Max": 10,
        "Notes": "Intensely sweet - adds a sweet malty flavor sometimes associated with honey. Also called Brumalt."
      },
      "Honey Malt (Gambrinus)": {
        "Origin": "Canada",
        "Mash?": 0,
        "Color": 25,
        "Power": 50,
        "Potential": 1.038,
        "Max": 20,
        "Notes": "This malt is similar in style to German 'brumalt', but it really doesn't compare to any other malt with its honey-like taste and residual sweetness. Best used in brown ales, porters, and stouts."
      },
      "Kolsch Malt": {
        "Origin": "Germany",
        "Mash?": "X",
        "Color": 4.5,
        "Power": 60,
        "Potential": 1.037,
        "Max": 100,
        "Notes": "For brewing Kolsch-type beers. This malt is produced only in the Cologne region of Germany."
      },
      "Lager Malt": {
        "Origin": 0,
        "Mash?": "X",
        "Color": 2,
        "Power": 100,
        "Potential": 1.038,
        "Max": 100,
        "Notes": "Very light lager malt used to make Pilsners, Lagers and other light beers. May be used as a base malt."
      },
      "Light Roasted Barley (Briess)": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 300,
        "Power": 0,
        "Potential": 1.033,
        "Max": 0,
        "Notes": "FLAVOR: Coffee, Intense Bitter COLOR: Red to Deep Brown Use 3-7% for coffee flavor in Porter and Stout Use 2-5% in Nut Brown Ales. Use Chocolate Malt or Black Malt in combination with Roasted Barley to obtain desired color."
      },
      "Maris Otter (Crisp)": {
        "Origin": "United Kingdom",
        "Mash?": 0,
        "Color": 4,
        "Power": 50,
        "Potential": 1.038,
        "Max": 100,
        "Notes": "Premium base malt from the UK. Popular for many English styles of beer including ales, pale ales and bitters."
      },
      "Melanoiden Malt": {
        "Origin": "Germany",
        "Mash?": "X",
        "Color": 20,
        "Power": 10,
        "Potential": 1.037,
        "Max": 15,
        "Notes": "Aromatic malt from Banberg, Germany. Promotes a full flavor and rounds off beer color. Promotes deep red color and malty flavor."
      },
      "Melanoidin (Weyermann)": {
        "Origin": "Germany",
        "Mash?": 0,
        "Color": 30,
        "Power": 0,
        "Potential": 1.037,
        "Max": 20,
        "Notes": "Red colored malt that improved head retention and stability. Used in red lagers, ales, dark beers. Intense red colour and malty aroma."
      },
      "MFB Pilsen": {
        "Origin": "France",
        "Mash?": 0,
        "Color": 1.8,
        "Power": 120,
        "Potential": 1.036,
        "Max": 100,
        "Notes": 0
      },
      "Mild Malt": {
        "Origin": "United Kingdom",
        "Mash?": "X",
        "Color": 4,
        "Power": 53,
        "Potential": 1.037,
        "Max": 100,
        "Notes": "Also called \"English Mild\" - a light specialty malt used in Brown Ales"
      },
      "Munich (BestM'lz)": {
        "Origin": "Germany",
        "Mash?": 0,
        "Color": 7.6142132,
        "Power": 150,
        "Potential": 1.035,
        "Max": 100,
        "Notes": "BEST Munich intensifies the color of the beer. It emphasizes the malt aroma of dark beer in an exciting way. It forms an excellent enzyme-rich foundation for all color-intensive beer styles. This malt is produced using a special malting process designed to bring out certain desirable qualities, such as high solubility."
      },
      "Munich 10L (Briess)": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 10,
        "Power": 40,
        "Potential": 1.035,
        "Max": 100,
        "Notes": "FLAVOR: Robust Malty COLOR: Golden to Orange Hues Adds a pronounced malty flavor without adding non-fermentables or affecting foam. Small amounts added to the grist will improve the malty flavor and give a richer color to low gravity brews."
      },
      "Munich 10L (Gambrinus)": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 10,
        "Power": 50,
        "Potential": 1.035,
        "Max": 80,
        "Notes": "Malty-sweet flavor characteristic and adds a slight orange color to the beer. Does not contribute signficantly to body or head retention. Use for: Bock, Porter, Marzen, Oktoberfest beers"
      },
      "Munich Dark (BestM'lz)": {
        "Origin": "Germany",
        "Mash?": 0,
        "Color": 12.6903553,
        "Power": 150,
        "Potential": 1.035,
        "Max": 100,
        "Notes": "BEST Munich Dark gives a pleasant full-bodied and malty flavor. The impact when using this darker malt is similar to BEST Munich: the color is even more intensified, the malt aroma is strengthened. Enzyme richness of this malt offers opportunities for brewing strongly colored beers. The production process for this malt is similar to the lighter variant of our BEST Munich."
      },
      "Munich I (Weyermann)": {
        "Origin": "Germany",
        "Mash?": 0,
        "Color": 7.1,
        "Power": 50,
        "Potential": 1.038,
        "Max": 100,
        "Notes": "Light Munich malt. May be used as a base for many German beer styles. Fest beers, bocks, ales. Enhances malty flavour and aroma"
      },
      "Munich Light": {
        "Origin": "German",
        "Mash?": 0,
        "Color": 6,
        "Power": 0,
        "Potential": 0,
        "Max": 0,
        "Notes": 0
      },
      "Munich Malt": {
        "Origin": "Germany",
        "Mash?": "X",
        "Color": 9,
        "Power": 72,
        "Potential": 1.037,
        "Max": 80,
        "Notes": "Malty-sweet flavor characteristic and adds a reddish amber color to the beer. Does not contribute signficantly to body or head retention. Use for: Bock, Porter, Marzen, Oktoberfest beers"
      },
      "Munich Malt (Great Western)": {
        "Origin": "Canada",
        "Mash?": 0,
        "Color": 9,
        "Power": 90,
        "Potential": 1.037,
        "Max": 100,
        "Notes": "This mellow kilned malt is ideal where unique malt flavor and rich aroma, is sought."
      },
      "Munich Malt - 10L": {
        "Origin": "US",
        "Mash?": "X",
        "Color": 10,
        "Power": 50,
        "Potential": 1.035,
        "Max": 80,
        "Notes": "Malty-sweet flavor characteristic and adds a slight orange color to the beer. Does not contribute signficantly to body or head retention. Use for: Bock, Porter, Marzen, Oktoberfest beers"
      },
      "Munich Malt - 20L": {
        "Origin": "US",
        "Mash?": "X",
        "Color": 20,
        "Power": 25,
        "Potential": 1.035,
        "Max": 80,
        "Notes": "Malty-sweet flavor characteristic and adds a orange to deep orange color to the beer. Does not contribute signficantly to body or head retention. Use for: Bock, Porter, Marzen, Oktoberfest beers"
      },
      "Munich Malt, Light (Weyermann)": {
        "Origin": "Germany",
        "Mash?": 0,
        "Color": 5.5,
        "Power": 72,
        "Potential": 1.037,
        "Max": 80,
        "Notes": "Malty-sweet flavor characteristic and adds a reddish amber color to the beer. Does not contribute signficantly to body or head retention. Use for: Bock, Porter, Marzen, Oktoberfest beers"
      },
      "Oats, Flaked": {
        "Origin": "US",
        "Mash?": "X",
        "Color": 1,
        "Power": 0,
        "Potential": 1.037,
        "Max": 30,
        "Notes": "Adds body, mouth feel and head retention to the beer Used in oatmeal stouts and porters Adds substantial protein haze to light beers Protein rest recommended unless flakes are pregelatinized"
      },
      "Oats, Flaked (toasted)": {
        "Origin": "US",
        "Mash?": "X",
        "Color": 15,
        "Power": 0,
        "Potential": 1.037,
        "Max": 30,
        "Notes": "Adds body, mouth feel and head retention to the beer Used in oatmeal stouts and porters Adds substantial protein haze to light beers Protein rest recommended unless flakes are pregelatinized"
      },
      "Oats, Golden Naked (Simpsons)": {
        "Origin": "UK",
        "Mash?": 0,
        "Color": 10,
        "Power": 0,
        "Potential": 1.032,
        "Max": 15,
        "Notes": "This unique product from Simpsons has a special, sweet berry-nut flavor. Used at a rate of 4-15% of total grist by weight, Golden Naked Oats will deliver a deep golden hue with light caramel flavors to the finished beer as well as a creamy, satin finish."
      },
      "Oats, Malted": {
        "Origin": "US",
        "Mash?": "X",
        "Color": 1,
        "Power": 0,
        "Potential": 1.037,
        "Max": 10,
        "Notes": "Malted oats. Adds body, mouth feel and head retention to the beer Creates chill haze in lighter beers, so is primarily used in dark ones.'"
      },
      "Pale 2-Row": {
        "Origin": "American",
        "Mash?": 0,
        "Color": 1.8,
        "Power": 0,
        "Potential": 0,
        "Max": 0,
        "Notes": 0
      },
      "Pale Ale Malt": {
        "Origin": "US",
        "Mash?": "X",
        "Color": 3.5,
        "Power": 85,
        "Potential": 1.036,
        "Max": 100,
        "Notes": "A US alternative to British or Belgian pale ale malts. Slightly darker than 2-row. Yields richer, maltier flavors than standard 2-row."
      },
      "Pale Ale Malt 2-Row (Briess)": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 3.5,
        "Power": 85,
        "Potential": 1.037,
        "Max": 100,
        "Notes": "Flavor:Malty Color Golden Hues Can be used as a base malt. More pronounced malty flavor than 2-Row Brewers Malt. Use with 2-Row Brewers Malt for rich malt flavor and additional color."
      },
      "Pale Ale Malt, Full Pint (Great Western)": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 2.25,
        "Power": 158,
        "Potential": 1.037,
        "Max": 100,
        "Notes": "GWM Full Pint Malt (2.0-2.5L) A spring 2-row barley developed at Oregon State University (originally named BCD-47). Described as \"very fermentable and having a very nice extract... Full Pint wort also tasted very good, pre and post boiled... a very pleasant and strong fresh salted popcorn note. A very positive clean sweetness as well, with no harshness or astringency... the fermented Full Pint beer was clean, slightly estery, a bit tart and bready."
      },
      "Pale Chocolate": {
        "Origin": "UK",
        "Mash?": 0,
        "Color": 225,
        "Power": 0,
        "Potential": 1.028,
        "Max": 10,
        "Notes": "Dark malt that gives a rich red or brown color and nutty flavor. Use for: Brown ales, porters, some stouts Maintains some malty flavor, not as dark as roasted malt."
      },
      "Pale Chocolate Malt": {
        "Origin": "UK",
        "Mash?": 0,
        "Color": 250,
        "Power": 0,
        "Potential": 1.033,
        "Max": 10,
        "Notes": 0
      },
      "Pale Malt (2 Row) Belgian": {
        "Origin": "Belgium",
        "Mash?": "X",
        "Color": 3,
        "Power": 60,
        "Potential": 1.037,
        "Max": 100,
        "Notes": "Base malt for all beer styles Higher potential yield than US, English equivalent pale ale malts"
      },
      "Pale Malt (2 Row) UK": {
        "Origin": "United Kingdom",
        "Mash?": "X",
        "Color": 3,
        "Power": 45,
        "Potential": 1.036,
        "Max": 100,
        "Notes": "Base malt for all English beer styles Lower diastatic power than American 2 Row Pale Malt"
      },
      "Pale Malt (2 Row) US": {
        "Origin": "US",
        "Mash?": "X",
        "Color": 2,
        "Power": 120,
        "Potential": 1.036,
        "Max": 100,
        "Notes": "Base malt for all beer styles"
      },
      "Pale Malt (2 Row), NW Pale": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 2,
        "Power": 140,
        "Potential": 1.036,
        "Max": 100,
        "Notes": "Base malt for all beer styles"
      },
      "Pale Malt (6 Row) US": {
        "Origin": "US",
        "Mash?": "X",
        "Color": 2,
        "Power": 150,
        "Potential": 1.035,
        "Max": 100,
        "Notes": "Base malt for all beer styles"
      },
      "Pale Malt, Golden Promise": {
        "Origin": "United Kingdom",
        "Mash?": "X",
        "Color": 2.5,
        "Power": 70,
        "Potential": 1.037,
        "Max": 100,
        "Notes": "Malt from a traditional barley variety grown in Scotland. Golden Promise produces a mellow wort, with a sweet, clean flavor. This base malt is a must for authentic Scottish ales, great for English styles as well.'"
      },
      "Pale Malt, Halcyon": {
        "Origin": "United Kingdom",
        "Mash?": "X",
        "Color": 2.5,
        "Power": 70,
        "Potential": 1.037,
        "Max": 100,
        "Notes": "Halcyon Pale Ale Malt is considered to be one of the last remaining traditional English Pale Malts. Adds a degree of biscuit flavor to the beer. Brighter and lighter in flavor than Pearl, Halcyon is a great malt for the production of Real Ales. It tends to produce a less sweet wort than Maris Otter."
      },
      "Pale Malt, Maris Otter": {
        "Origin": "United Kingdom",
        "Mash?": "X",
        "Color": 3,
        "Power": 120,
        "Potential": 1.038,
        "Max": 100,
        "Notes": "Premium base malt from the UK. Popular for many English styles of beer including ales, pale ales and bitters."
      },
      "Peat Smoked Malt": {
        "Origin": "United Kingdom",
        "Mash?": "X",
        "Color": 2.8,
        "Power": 0,
        "Potential": 1.034,
        "Max": 20,
        "Notes": "Robust smoky malt that provides a smoky flavor. Used in scottish ales and wee heavy ales."
      },
      "Pilsen (BestM'lz)": {
        "Origin": "Germany",
        "Mash?": 0,
        "Color": 1.5228426,
        "Power": 329,
        "Potential": 1.036,
        "Max": 100,
        "Notes": "BEST Pilsen Malt gives beer a fresh and rounded taste. It is used for all types of beers based on basically barley malt. It forms an excellent 'light' and enzyme-rich foundation for almost all beer styles. Malt characteristics: low protein levels, high extract content, light color and high enzymatic activity. BEST Pilsen Malt is also available in organic quality."
      },
      "Pilsen (Dingemans)": {
        "Origin": "Belgium",
        "Mash?": 0,
        "Color": 1.6,
        "Power": 90,
        "Potential": 1.037,
        "Max": 100,
        "Notes": 0
      },
      "Pilsner (2 Row) Belgian": {
        "Origin": "Belgium",
        "Mash?": "X",
        "Color": 2,
        "Power": 105,
        "Potential": 1.036,
        "Max": 100,
        "Notes": "Belgian base malt for Continental lagers"
      },
      "Pilsner (2 Row) German": {
        "Origin": "Germany",
        "Mash?": "X",
        "Color": 2,
        "Power": 110,
        "Potential": 1.037,
        "Max": 100,
        "Notes": "German base for Pilsners and Bohemian Lagers"
      },
      "Pilsner (2 Row) UK": {
        "Origin": "United Kingdom",
        "Mash?": "X",
        "Color": 1,
        "Power": 60,
        "Potential": 1.036,
        "Max": 100,
        "Notes": "Pilsner base malt"
      },
      "Pilsner (Weyermann)": {
        "Origin": "Germany",
        "Mash?": 0,
        "Color": 1.7,
        "Power": 110,
        "Potential": 1.038,
        "Max": 100,
        "Notes": "Pilsner base malt for all pilsners, lagers. Highly modified malt."
      },
      "Pilsner Malt (Avangard)": {
        "Origin": "Germany",
        "Mash?": 0,
        "Color": 3.5,
        "Power": 220,
        "Potential": 1.037,
        "Max": 100,
        "Notes": 0
      },
      "Pilsner malt, 300 degrees for 25 minutes": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 20,
        "Power": 25,
        "Potential": 1.035,
        "Max": 80,
        "Notes": "Malty-sweet flavor characteristic and adds a orange to deep orange color to the beer. Does not contribute signficantly to body or head retention. Use for: Bock, Porter, Marzen, Oktoberfest beers"
      },
      "Pilsner malt, 400 degrees for 50 minutes": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 200,
        "Power": 0,
        "Potential": 1.028,
        "Max": 10,
        "Notes": "Dark malt that gives a rich red or brown color and nutty flavor. Use for: Brown ales, porters, some stouts Maintains some malty flavor, not as dark as roasted malt."
      },
      "RedX (BestM'lz)": {
        "Origin": "Alemanha",
        "Mash?": 0,
        "Color": 15.2284264,
        "Power": 250,
        "Potential": 1.036,
        "Max": 100,
        "Notes": "BEST Red X malt is specially created for brewing red-tinted beers. You can use BEST Red X for up to 100% of your grain bill ' no other malt is required. Offering exceptional reliability and optimal processability, BEST Red X can be employed to brew consistently fiery beers with intense reddish hues. Its full-bodied flavor and attractive, unique color coupled with easy han-dling in the brewery make BEST Red X the best choice for creating a broad range of new beers, such as red-tinted wheat beers. As with all BEST malts, BEST Red X is produced using a special malting procedure exclusively from two-rowed spring malting barley from recognized and thor-oughly tested barley varieties.'"
      },
      "Rice, Flaked": {
        "Origin": "US",
        "Mash?": "X",
        "Color": 1,
        "Power": 0,
        "Potential": 1.032,
        "Max": 25,
        "Notes": "Used to add fermentables without increasing body or flavor. Produces a milder, less grainy tasting beer. Examples: American lagers, Bohemian lagers, Pilsners"
      },
      "Rice, Flaked (Briess)": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 1,
        "Power": 0,
        "Potential": 1.032,
        "Max": 0,
        "Notes": "Use up to 40% as a cereal adjunct"
      },
      "Roasted Barley": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 300,
        "Power": 0,
        "Potential": 1.025,
        "Max": 10,
        "Notes": "Roasted at high temperature to create a burnt, grainy, coffee like flavor. Imparts a red to deep brown color to beer, and very strong roasted flavor. Use 2-4% in Brown ales to add a nutty flavor, or 3-10% in Porters and Stouts for coffee flavor."
      },
      "Rye Malt": {
        "Origin": "US",
        "Mash?": "X",
        "Color": 4.7,
        "Power": 75,
        "Potential": 1.029,
        "Max": 15,
        "Notes": "Adds a dry, crisp character to the beer. Yields a deep red color, and a distinctive rye flavor Must limit to 10-15% of the mash as it tends to produce \"stuck\" mashes."
      },
      "Rye, Flaked": {
        "Origin": "US",
        "Mash?": "X",
        "Color": 2,
        "Power": 0,
        "Potential": 1.036,
        "Max": 10,
        "Notes": "Imparts a dry, crisp rye flavor to rye beers. Can be easier to mash than raw rye."
      },
      "Rye, Flaked (Briess)": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 4.6,
        "Power": 0,
        "Potential": 1.033,
        "Max": 0,
        "Notes": "Use up to 40% as a cereal adjunct in the total grist to create Rye Beer. Start at 5-10% and increase in increments of 5% because of the concentrated flavor of Rye Flakes."
      },
      "Rye, Flaked (toasted)": {
        "Origin": "US",
        "Mash?": "X",
        "Color": 10,
        "Power": 0,
        "Potential": 1.036,
        "Max": 10,
        "Notes": "Imparts a more intendse dry, crisp rye flavor to rye beers. Can be easier to mash than raw rye."
      },
      "Smoked Malt": {
        "Origin": "Germany",
        "Mash?": "X",
        "Color": 9,
        "Power": 0,
        "Potential": 1.037,
        "Max": 100,
        "Notes": "Malt that has been smoked over an open fire. Creates a distinctive \"smoked\" flavor and aroma. Used primarily for German Rauchbier but can also be added to Brown Ales and Porters."
      },
      "Special B (Castle Malting)": {
        "Origin": "Belgien",
        "Mash?": 0,
        "Color": 152.284264,
        "Power": 0,
        "Potential": 1.035,
        "Max": 10,
        "Notes": "Mycket speciell belgisk karkellmalt.Ger en djupt r'd till m'rkt brun-svart f'rg och fylligare kropp, unik rik maltig smak och arom av russin, n'tter och plommon. Anv'nds tex till Abbey Ales."
      },
      "Special B (Dingemans)": {
        "Origin": "Belgium",
        "Mash?": 0,
        "Color": 147.5,
        "Power": 0,
        "Potential": 1.03,
        "Max": 20,
        "Notes": 0
      },
      "Special B Malt": {
        "Origin": "Belgium",
        "Mash?": 0,
        "Color": 180,
        "Power": 0,
        "Potential": 1.03,
        "Max": 10,
        "Notes": "Extreme caramel aroma and flavored malt. Used in dark Belgian Abbey and Trappist ales. Unique flavor and aroma."
      },
      "Special Roast": {
        "Origin": "US",
        "Mash?": "X",
        "Color": 50,
        "Power": 6,
        "Potential": 1.033,
        "Max": 10,
        "Notes": "Use for English ales, nut brown ales and porters. Adds a toasted, biscuit like flavor and aroma"
      },
      "Toasted Malt": {
        "Origin": "United Kingdom",
        "Mash?": "X",
        "Color": 27,
        "Power": 0,
        "Potential": 1.033,
        "Max": 10,
        "Notes": "Toasted malt can be made at home by toasting pale malted barley for 10-15 minutes at 350 F. Similar to Biscuit or Victory malt - this malt adds reddish/orange color and improved body without sweetness. Toasted flavor. Mashing required to avoid haze."
      },
      "Triticale, Flaked": {
        "Origin": 0,
        "Mash?": 0,
        "Color": 2,
        "Power": 0,
        "Potential": 0,
        "Max": 100,
        "Notes": 0
      },
      "Two-Row Pale Malt": {
        "Origin": "Pale Moon, Alamosa CO",
        "Mash?": 0,
        "Color": 3,
        "Power": 150,
        "Potential": 1.037,
        "Max": 100,
        "Notes": "Batch from Craft Maltster in Texas - Blacklands Malt"
      },
      "Victory Malt": {
        "Origin": "US",
        "Mash?": "X",
        "Color": 25,
        "Power": 50,
        "Potential": 1.034,
        "Max": 15,
        "Notes": "Toasted malt that adds a \"Biscuit\" or toasted flavor to English ales. Use for: Nut brown ales, porters"
      },
      "Vienna (BestM'lz)": {
        "Origin": "Germany",
        "Mash?": 0,
        "Color": 4.0609137,
        "Power": 220,
        "Potential": 1.035,
        "Max": 100,
        "Notes": "BEST Vienna deepens the light and brilliant color of the beer and creates a pleasant, full-bodied and malty taste. Selected malting barley is used to produce the malt and it is created according to a special malting process. This malt has a high enzymatic potential."
      },
      "Vienna Malt": {
        "Origin": "Germany",
        "Mash?": "X",
        "Color": 3.5,
        "Power": 50,
        "Potential": 1.036,
        "Max": 90,
        "Notes": "Kiln dried malt darker than Pale Malt, but not as dark as Munich Malt Imparts a golden to orange color to the beer."
      },
      "Vienna Malt (Briess)": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 3.5,
        "Power": 130,
        "Potential": 1.036,
        "Max": 100,
        "Notes": "FLAVOR: Malty, Very Slight Biscuit Can be used as a base malt Use with Caramel Malts to produce malty red and amber beers."
      },
      "Vienna Malt (Weyermann)": {
        "Origin": "Germany",
        "Mash?": 0,
        "Color": 3,
        "Power": 50,
        "Potential": 1.038,
        "Max": 100,
        "Notes": "Vienna base malt - used in many continental beer styles. Full bodied, golden color."
      },
      "Wheat - White Malt (Briess)": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 2.3,
        "Power": 145,
        "Potential": 1.039,
        "Max": 100,
        "Notes": "FLAVOR: Creamy, Sweet, Malty, Wheat, Floury Imparts malty flavor not obtainable from raw wheat. Use with rice hulls to improve lautering and help prevent stuck mash. White Wheat Malt contributes to foam production and foam stability."
      },
      "Wheat Malt, Bel": {
        "Origin": "Belgium",
        "Mash?": "X",
        "Color": 2,
        "Power": 74,
        "Potential": 1.037,
        "Max": 60,
        "Notes": "Malted wheat for use in Wheat beers"
      },
      "Wheat Malt, Dark": {
        "Origin": "Germany",
        "Mash?": "X",
        "Color": 9,
        "Power": 10,
        "Potential": 1.039,
        "Max": 20,
        "Notes": "Dark malted wheat base for use in dark wheat styles such as Dunkleweizen."
      },
      "Wheat Malt, Ger": {
        "Origin": "Germany",
        "Mash?": "X",
        "Color": 2,
        "Power": 95,
        "Potential": 1.039,
        "Max": 60,
        "Notes": "Malted wheat base for use in all wheat styles"
      },
      "Wheat Malt, White": {
        "Origin": "US",
        "Mash?": "X",
        "Color": 2.4,
        "Power": 130,
        "Potential": 1.04,
        "Max": 60,
        "Notes": "White wheat gives a malty flavor not available from raw wheat. Used in Weiss, Wit and White beers"
      },
      "Wheat, Flaked": {
        "Origin": "US",
        "Mash?": "X",
        "Color": 1.6,
        "Power": 0,
        "Potential": 1.035,
        "Max": 40,
        "Notes": "Flaked wheat adds to increased body and foam retention Used in place of raw or torrified wheat for faster conversion and better yield. May be used in small amounts to improve head retention and body Examples: Belgian White beer, Wit"
      },
      "Wheat, Roasted": {
        "Origin": "Germany",
        "Mash?": "X",
        "Color": 425,
        "Power": 0,
        "Potential": 1.025,
        "Max": 10,
        "Notes": "Also called Chocolate Wheat Malt. Kilned raw wheat - adds a deep, dark brown color to dunkelweizens and other dark beer styles. Roasted, woody, charcoal or burnt toast flavor depending on degree of roasting."
      },
      "Wheat, Torrified": {
        "Origin": "US",
        "Mash?": "X",
        "Color": 1.7,
        "Power": 0,
        "Potential": 1.036,
        "Max": 40,
        "Notes": "Unmodified wheat that has been \"popped\" to open the kernels Used primarily in place of raw wheat when making Belgian White and Wit Faster conversion and higher yield than raw wheat Protein rest recommended when mashing"
      },
      "White Wheat": {
        "Origin": "American",
        "Mash?": 0,
        "Color": 2.8,
        "Power": 0,
        "Potential": 0,
        "Max": 0,
        "Notes": 0
      },
      "White Wheat Malt": {
        "Origin": "US",
        "Mash?": 0,
        "Color": 2.4,
        "Power": 130,
        "Potential": 1.04,
        "Max": 60,
        "Notes": "White wheat gives a malty flavor not available from raw wheat. Used in Weiss, Wit and White beers"
      }
    }
  }
}
