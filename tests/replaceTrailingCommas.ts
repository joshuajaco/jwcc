import assert from "assert";
import { replaceCommentsAndCommas } from "..";

assert.equal(
  replaceCommentsAndCommas(
    `
{                                  
  /* [1,2,3,] */                   
  "foo": /* [1,2,3,] */ "[bar,,]" ,
  //ay                             
                                   
}                                  
//ay`
  ),
  `
{                                  
                                   
  "foo":                "[bar,,]"  
                                   
                                   
}                                  
    `
);
