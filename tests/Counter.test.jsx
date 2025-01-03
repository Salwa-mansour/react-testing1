import { render,screen } from "@testing-library/react";
import { describe ,it,expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";
import Counter from "../src/components/Counter";


describe("Counter component tests",()=>{
   it("increments counter on button click",async ()=>{
        render(<Counter/>);

        const button = screen.getByRole("button",{name:/increment/i});
        const counterValue= screen.getByTestId('counter-value');

        expect(counterValue.textContent).toEqual("0");
  
        await userEvent.click(button);
        expect(counterValue.textContent).toEqual("1");
  
    });
});