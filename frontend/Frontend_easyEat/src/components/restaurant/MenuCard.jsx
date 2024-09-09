import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";
import { categorizeIngredients } from "../util/categarizedIngredients";

const demo=[
  {
    category:"Nuts & seeds",
    ingredients:["cashews"]

  },

  {
    category:"Protein",
    ingredients:["Ground-beef","Bacon Strips"]

  }
];

const MenuCard = ({item}) => {

  const handleCheckboxChange=(value)=>{
    console.log(value)

  }


  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex items-center justify-between gap-5">
          <div className="lg:flex items-center lg:gap-5">
            <img className="w-[7rem] h-[7rem] object-cover"
              src={item.images[0]}
              alt=""
            />
          </div>
          <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
            <p className="font-semibold text-xl">{item.name}</p>
            <p>{item.price}</p>
            <p className="text-gray-400">
              {item.description}
            </p>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form >
          <div className="flex gap-5 flex-wrap ">

            {
              Object.keys(categorizeIngredients(item.ingredients)).map((category)=>(
                <div key={`category-${category}`}>
                  <p >{category}</p>
                <FormGroup >
                
                {categorizeIngredients(item.ingredients)[category].map((item)=>(
                  <FormControlLabel  key={item.name} control={<Checkbox onChange={()=>(handleCheckboxChange(item))}  />} label={item.name} />
                ))}
                
              </FormGroup>

              </div>
              )
            )
            }
            

          </div>
          <div className="pt-5">
            <Button variant="contained" type="submit" disabled={false}>{true ? "Add to cart":"Out of Stock"}</Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;
