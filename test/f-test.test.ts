import { exportAllDeclaration } from "@babel/types";

test("additional works",()=>{
    exportAllDeclaration(2+2).toBe(4);
})