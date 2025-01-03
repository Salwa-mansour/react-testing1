import { render,screen } from "@testing-library/react";
import { describe ,it,expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import Greeting from "../src/components/Greeting";

describe("greeting component tests",()=>{
    it("renders a default greeting",()=>{
        render(<Greeting/>);
        expect(screen.getByText("Hello, world!")).toBeInTheDocument();
    });

    it("renders greeting with a name",()=>{
    /* arrange */  render(<Greeting name={"Salwa"} />);
    /* act */  const text = screen.getByText("Hello, Salwa!");
     /* assert  */   expect(text).toBeInTheDocument();
    });
});