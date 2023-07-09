
// Returns value based on the 'OR' Truth Table
const or = (A, B) => {
    if (A) return A;
    else return B;
  };

  // Returns value based on the 'AND' Truth Table
  const and = (A, B) => {
    if (A) return B;
    else return A;
  };

  // 'cb' parameter should be either 'OR' or 'AND' functions from above
  const calculateTruthTable = (A, cb, B,) => {
    console.log(cb(A, B));
  };


  // Implement the imported helper functions from line 1
//    Read the export file for the explanation of how they work

// Example workflow for the problem directly below:
//    A    B     !A || (A && B)
//    -------------------
//    0    1      ?

//    1. !A -> 1
//    2. calculateTruthTable(0, and, 1) -> 0
//    3. calculateTruthTable(1, or, 0) -> 1
//    4. Answer: 1
