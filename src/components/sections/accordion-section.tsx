import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Wrapper from "../wrapper/wrapper";

const AccordionSection = () => {
  return (
    <>
      <div className="w-full">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Do I have To Pay For Shipping?</AccordionTrigger>
            <AccordionContent>
              Shipping is Free for Order above $100. For orders below $100, a
              flat rate of $10 is charged.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Where Are These Products coming from?
            </AccordionTrigger>
            <AccordionContent>
              Our products are sourced from local suppliers in the Japan and the
              US to ensure the best quality.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Can I return the products I buy?
            </AccordionTrigger>
            <AccordionContent>
              No! We do not accept returns. However, if you have any issues with
              your order, please contact us.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default AccordionSection;
