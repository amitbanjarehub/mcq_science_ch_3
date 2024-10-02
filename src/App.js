import React, { useState } from "react";
import {
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Box,
  Typography,
  Grid,
  Stack,
  TextField,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import emailjs from "emailjs-com";

const questions = [
  // Topic: Laws of Chemical Combination
  {
    id: 1,
    question:
      "Which law states that mass is neither created nor destroyed in a chemical reaction?",
    options: {
      A: "Law of Conservation of Mass",
      B: "Law of Definite Proportions",
      C: "Law of Multiple Proportions",
      D: "Avogadro's Law",
    },
    correctAnswer: "A",
  },
  {
    id: 2,
    question:
      "According to the Law of Definite Proportions, a chemical compound always contains:",
    options: {
      A: "The same proportions of elements",
      B: "Different proportions of elements",
      C: "Only one element",
      D: "Two or more compounds",
    },
    correctAnswer: "A",
  },
  {
    id: 3,
    question: "The Law of Multiple Proportions applies when:",
    options: {
      A: "Two elements form more than one compound",
      B: "One element forms multiple compounds",
      C: "Elements combine in fixed ratios",
      D: "Mass is conserved",
    },
    correctAnswer: "A",
  },
  {
    id: 4,
    question: "Which scientist proposed the atomic theory?",
    options: {
      A: "John Dalton",
      B: "J.J. Thomson",
      C: "Ernest Rutherford",
      D: "Niels Bohr",
    },
    correctAnswer: "A",
  },
  {
    id: 5,
    question:
      "What is the ratio of masses of hydrogen and oxygen in water according to the law of definite proportions?",
    options: { A: "1:8", B: "1:16", C: "2:1", D: "1:2" },
    correctAnswer: "A",
  },
  {
    id: 6,
    question:
      "In a chemical reaction, the total mass of reactants is equal to:",
    options: {
      A: "Total mass of products",
      B: "Half the mass of products",
      C: "Twice the mass of products",
      D: "None of the above",
    },
    correctAnswer: "A",
  },
  {
    id: 7,
    question:
      "Which law is demonstrated by the reaction between carbon and oxygen to form carbon dioxide?",
    options: {
      A: "Law of Conservation of Mass",
      B: "Law of Definite Proportions",
      C: "Law of Multiple Proportions",
      D: "None of the above",
    },
    correctAnswer: "B",
  },
  {
    id: 8,
    question:
      "If two elements can combine to form more than one compound, this illustrates which law?",
    options: {
      A: "Law of Conservation of Mass",
      B: "Law of Definite Proportions",
      C: "Law of Multiple Proportions",
      D: "Avogadro's Law",
    },
    correctAnswer: "C",
  },
  {
    id: 9,
    question:
      "Which statement is true regarding the Law of Conservation of Mass?",
    options: {
      A: "Mass can be created.",
      B: "Mass can be destroyed.",
      C: "Mass remains constant.",
      D: "Mass changes during reactions.",
    },
    correctAnswer: "C",
  },

  // Topic : What is an Atom?

  {
    id: 10,
    question: "What is the smallest unit of an element?",
    options: { A: "Molecule", B: "Atom", C: "Compound", D: "Ion" },
    correctAnswer: "B",
  },
  {
    id: 11,
    question: "Atoms are made up of which subatomic particles?",
    options: {
      A: "Electrons, Neutrons, and Protons",
      B: "Electrons and Ions",
      C: "Molecules",
      D: "Nuclei",
    },
    correctAnswer: "A",
  },
  {
    id: 12,
    question: "Which part of the atom has a positive charge?",
    options: { A: "Electron", B: "Neutron", C: "Proton", D: "Nucleus" },
    correctAnswer: "C",
  },
  {
    id: 13,
    question: "What is the charge of an electron?",
    options: { A: "Positive", B: "Negative", C: "Neutral", D: "Varies" },
    correctAnswer: "B",
  },
  {
    id: 14,
    question: "Where are neutrons located in an atom?",
    options: {
      A: "Outside nucleus",
      B: "Inside nucleus",
      C: "In orbitals",
      D: "In shells",
    },
    correctAnswer: "B",
  },
  {
    id: 15,
    question: "Which particle determines the atomic number?",
    options: { A: "Neutron", B: "Proton", C: "Electron", D: "Nucleus" },
    correctAnswer: "B",
  },
  {
    id: 16,
    question: "What do atoms combine to form?",
    options: { A: "Molecules", B: "Ions", C: "Nuclei", D: "Electrons" },
    correctAnswer: "A",
  },
  {
    id: 17,
    question: "The nucleus contains which particles?",
    options: {
      A: "Electrons and Protons",
      B: "Neutrons and Electrons",
      C: "Protons and Neutrons",
      D: "Only Protons",
    },
    correctAnswer: "C",
  },
  {
    id: 18,
    question: "Which statement about atoms is true?",
    options: {
      A: "All atoms are identical.",
      B: "Atoms cannot be created or destroyed.",
      C: "Atoms have no mass.",
      D: "Atoms can be seen with naked eye.",
    },
    correctAnswer: "B",
  },

  // Topic : What is a Molecule?

  {
    id: 19,
    question: "What is a molecule?",
    options: {
      A: "The smallest unit of a compound that retains its properties.",
      B: "An atom with no charge.",
      C: "The center part of an atom.",
      D: "An ion.",
    },
    correctAnswer: "A",
  },
  {
    id: 20,
    question: "Which molecule consists only of two atoms?",
    options: {
      A: "Water (H2O)",
      B: "Oxygen (O2)",
      C: "Carbon dioxide (CO2)",
      D: "Ammonia (NH3)",
    },
    correctAnswer: "B",
  },
  {
    id: 21,
    question: "What type of bond holds molecules together?",
    options: {
      A: "Ionic bond",
      B: "Covalent bond",
      C: "Metallic bond",
      D: "All types",
    },
    correctAnswer: "B",
  },
  {
    id: 22,
    question: "Which molecule contains three different elements?",
    options: {
      A: "Water (H2O)",
      B: "Sodium chloride (NaCl)",
      C: "Carbon dioxide (CO2)",
      D: "Methane (CH4)",
    },
    correctAnswer: "A",
  },
  {
    id: 23,
    question: "How many atoms are in one molecule of glucose (C6H12O6)?",
    options: { A: "24", B: "18", C: "12", D: "6" },
    correctAnswer: "B",
  },
  {
    id: 24,
    question: "What is formed when two or more atoms bond together?",
    options: { A: "Element", B: "Compound", C: "Molecule", D: "Mixture" },
    correctAnswer: "C",
  },
  {
    id: 25,
    question: "Which gas is diatomic at room temperature?",
    options: {
      A: "Carbon dioxide (CO2)",
      B: "Nitrogen (N2)",
      C: "Methane (CH4)",
      D: "Helium (He)",
    },
    correctAnswer: "B",
  },
  {
    id: 26,
    question: "What does a molecular formula represent?",
    options: {
      A: "The number and type of atoms in a molecule.",
      B: "Only the number of atoms.",
      C: "Only the type of atoms.",
      D: "The arrangement of atoms.",
    },
    correctAnswer: "A",
  },
  {
    id: 27,
    question: "Which molecule is an example of a covalent compound?",
    options: {
      A: "Sodium chloride (NaCl)",
      B: "Calcium oxide (CaO)",
      C: "Water (H2O)",
      D: "Iron oxide (Fe2O3)",
    },
    correctAnswer: "C",
  },

  // Topic Writing Chemical Formulae

  {
    id: 28,
    question: "What does the chemical formula H2O represent?",
    options: {
      A: "Hydrogen peroxide",
      B: "Water",
      C: "Hydrogen gas",
      D: "Oxygen gas",
    },
    correctAnswer: "B",
  },

  {
    id: 29,
    question: "How many hydrogen atoms are in methane (CH4)?",
    options: { A: "1", B: "4", C: "2", D: "3" },
    correctAnswer: "B",
  },

  {
    id: 30,
    question: "What is the chemical formula for sodium chloride?",
    options: { A: "NaCl", B: "Na2Cl2", C: "NaCl2", D: "Na3Cl" },
    correctAnswer: "A",
  },

  {
    id: 31,
    question: "Which element is represented by the symbol O?",
    options: { A: "Gold", B: "Oxygen", C: "Silver", D: "Iron" },
    correctAnswer: "B",
  },

  {
    id: 32,
    question: "How do you write the formula for calcium carbonate?",
    options: { A: "CaCO3", B: "Ca(CO3)", C: "CaCO4", D: "Ca2CO3" },
    correctAnswer: "A",
  },

  {
    id: 33,
    question: "What does CO2 stand for?",
    options: {
      A: "Carbon monoxide",
      B: "Carbon dioxide",
      C: "Carbon disulfide",
      D: "Carbon dichloride",
    },
    correctAnswer: "B",
  },

  {
    id: 34,
    question: "What is the formula for ammonia?",
    options: { A: "NH3", B: "NH4+", C: "N2H4", D: "N3H8" },
    correctAnswer: "A",
  },

  {
    id: 35,
    question: "How many oxygen atoms are in glucose (C6H12O6)?",
    options: { A: "6", B: "12", C: "8", D: "4" },
    correctAnswer: "A",
  },

  {
    id: 36,
    question: "Which formula represents sulfuric acid?",
    options: { A: "H2SO4", B: "H2S2O4", C: "SO4H2", D: "HSO4" },
    correctAnswer: "A",
  },

  // Topic Molecular Mass

  {
    id: 37,
    question: "What is molecular mass measured in?",
    options: {
      A: "Grams per mole (g/mol)",
      B: "Kilograms per mole (kg/mol)",
      C: "Atoms per mole (a/mol)",
      D: "None",
    },
    correctAnswer: "A",
  },

  {
    id: 38,
    question: "What is the molecular mass of water (H2O)?",
    options: { A: "18 g/mol", B: "16 g/mol ", C: "20 g/mol ", D: "22 g/mol" },
    correctAnswer: "A",
  },

  {
    id: 39,
    question:
      "If one mole of sodium has a mass of approximately 23 grams, what is its molecular mass?",
    options: {
      A: "23 g/mol ",
      B: "46 g/mol ",
      C: "11.5 g/mol ",
      D: "12 g/mol",
    },
    correctAnswer: "A",
  },

  {
    id: 40,
    question: "Which has a higher molecular mass? H2 or O2?",
    options: {
      A: "H2 ",
      B: "O2 ",
      C: "Both are equal ",
      D: "Cannot be determined",
    },
    correctAnswer: "B",
  },

  {
    id: 41,
    question: "What is the molecular mass for carbon dioxide CO2?",
    options: { A: "44 g/mol ", B: "22 g/mol ", C: "32 g/mol ", D: "28 g/mol" },
    correctAnswer: "A",
  },

  {
    id: 42,
    question: "How do you calculate molecular mass?",
    options: {
      A: "Add up atomic masses from periodic table.",
      B: "Multiply atomic masses by volume.",
      C: "Divide total mass by number.",
      D: "Subtract atomic masses.",
    },
    correctAnswer: "A",
  },

  {
    id: 43,
    question: "What is the molecular mass for methane CH4?",
    options: {
      A: "16 g/mol ",
      B: "18 g/mol ",
      C: "14 g/mol ",
      D: "12 g/mol ",
    },
    correctAnswer: "A",
  },

  {
    id: 44,
    question: "Which molecule has a higher molecular mass? HCl or Cl2?",
    options: {
      A: "HCl ",
      B: "Cl2 ",
      C: "Both are equal ",
      D: "Cannot be determined",
    },
    correctAnswer: "B",
  },

  {
    id: 45,
    question: "What unit do we use for molecular mass?",
    options: {
      A: "Grams ",
      B: "Kilograms ",
      C: "Grams per mole ",
      D: "Moles",
    },
    correctAnswer: "C",
  },

  // Topic Mole Concept

  {
    id: 46,
    question: "One mole contains how many particles?",
    options: {
      A: "6.022 x 10²³",
      B: "1.602 x 10⁻¹⁹",
      C: "3.14 x 10²",
      D: "9.81 x 10²⁴",
    },
    correctAnswer: "A",
  },

  {
    id: 47,
    question:
      "The molar mass of an element refers to its mass in grams per mole.",
    options: {
      A: "True",
      B: "False",
    },
    correctAnswer: "A",
  },

  {
    id: 48,
    question: "How many grams are in one mole of carbon-12?",
    options: {
      A: "12 grams",
      B: "6 grams",
      C: "24 grams",
      D: "1 gram",
    },
    correctAnswer: "A",
  },

  {
    id: 49,
    question: "To convert moles to grams, you multiply by what?",
    options: {
      A: "Molar volume",
      B: "Molar mass",
      C: "Avogadro number",
      D: "Density",
    },
    correctAnswer: "B",
  },

  {
    id: 50,
    question: "If you have two moles of NaCl, how many grams do you have?",
    options: {
      A: "58.44 grams",
      B: "116.88 grams",
      C: "29.22 grams",
      D: "117 grams",
    },
    correctAnswer: "B",
  },

  {
    id: 51,
    question: "How many moles are in 36 grams of water?",
    options: {
      A: "1 mole",
      B: "0.5 moles",
      C: "2 moles",
      D: "3 moles",
    },
    correctAnswer: "B",
  },

  {
    id: 52,
    question: "What does Avogadro number represent?",
    options: {
      A: "Number of particles in one mole",
      B: "Number of molecules in one liter",
      C: "Number of moles in one gram",
      D: "Number of atoms in one molecule",
    },
    correctAnswer: "A",
  },

  {
    id: 53,
    question:
      "If you have a solution with a concentration of 1 M, how many moles are present in one liter?",
    options: {
      A: "1 mole",
      B: "0.5 moles",
      C: "0.25 moles",
      D: "2 moles",
    },
    correctAnswer: "A",
  },

  {
    id: 54,
    question: "How many molecules are there in one mole",
    options: {
      A: "6.022 x 10²³",
      B: "1 x 10²³",
      C: "3.01 x 10²³",
      D: "1 x 10²⁴",
    },
    correctAnswer: "A",
  },
  {
    id: 55,
    question: "What is the molar mass of sodium (Na)?",
    options: { A: "23 g/mol", B: "12 g/mol", C: "24 g/mol", D: "16 g/mol" },
    correctAnswer: "A",
  },
  {
    id: 56,
    question: "How many moles are in 100 grams of sodium chloride (NaCl)?",
    options: { A: "1 mole", B: "2 moles", C: "0.5 moles", D: "3 moles" },
    correctAnswer: "A",
  },
  {
    id: 57,
    question: "Which of the following represents a mole?",
    options: {
      A: "6.022 x 10²³ particles",
      B: "1 gram",
      C: "22.4 liters",
      D: "All of the above",
    },
    correctAnswer: "A",
  },
  {
    id: 58,
    question: "What is the mass of one mole of carbon dioxide (CO2)?",
    options: { A: "44 g", B: "22 g", C: "28 g", D: "32 g" },
    correctAnswer: "A",
  },
  {
    id: 59,
    question:
      "If you have a solution with a concentration of 2 M, how many moles are present in two liters?",
    options: { A: "2 moles", B: "4 moles", C: "1 mole", D: "3 moles" },
    correctAnswer: "B",
  },
  {
    id: 60,
    question:
      "What is the volume occupied by one mole of an ideal gas at standard temperature and pressure (STP)?",
    options: { A: "22.4 L", B: "24 L", C: "18 L", D: "20 L" },
    correctAnswer: "A",
  },
];

const App = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [submittedForm, setSubmittedForm] = useState(false);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [submitted, setSubmitted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewAnswers, setViewAnswers] = useState(false);
  const questionsPerPage = 10;

  const [result, setResult] = useState({
    attended: 0,
    skipped: 0,
    incorrect: 0,
    marks: 0,
    percentage: 0,
  });

  const totalPages = Math.ceil(questions.length / questionsPerPage);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name && mobile) {
      setSubmittedForm(true); // Show the MCQ only if form is submitted
    }
  };

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let attended = 0;
    let incorrect = 0;
    let marks = 0;

    answers.forEach((answer, index) => {
      if (answer) {
        attended++;
        if (answer === questions[index].correctAnswer) {
          marks++;
        } else {
          incorrect++;
        }
      }
    });

    const skipped = questions.length - attended;
    const percentage = (marks / questions.length) * 100;

    setResult({ attended, skipped, incorrect, marks, percentage });
    setSubmitted(true);

    // Send the result email
    sendEmail(name, mobile, attended, skipped, incorrect, marks, percentage);
  };

  const sendEmail = (
    name,
    mobile,
    attended,
    skipped,
    incorrect,
    marks,
    percentage
  ) => {
    const templateParams = {
      user_name: name,
      user_mobile: mobile,
      attended_questions: attended,
      skipped_questions: skipped,
      incorrect_answers: incorrect,
      total_marks: marks,
      percentage: percentage,
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_USER_ID"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  const handleViewAnswers = () => {
    setViewAnswers(true);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startQuestionIndex = (currentPage - 1) * questionsPerPage;
  const currentQuestions = questions.slice(
    startQuestionIndex,
    startQuestionIndex + questionsPerPage
  );

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, pb: "120px", overflow: "auto" }}>
      {!submittedForm ? (
        <form onSubmit={handleFormSubmit}>
          <Stack spacing={2} sx={{ maxWidth: 400, margin: "auto" }}>
            <TextField
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              label="Mobile Number"
              variant="outlined"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <Button type="submit" variant="contained" color="primary">
              Start Quiz
            </Button>
          </Stack>
        </form>
      ) : !submitted ? (
        <>
          {currentQuestions.map((q, index) => (
            <Stack
              key={q.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                marginBottom: "20px",
                p: { xs: 2, md: 3 },
              }}
            >
              <FormControl component="fieldset" sx={{ mb: 3 }}>
                <FormLabel component="legend">
                  {startQuestionIndex + index + 1}. {q.question}
                </FormLabel>
                <RadioGroup
                  name={`question-${q.id}`}
                  value={answers[startQuestionIndex + index]}
                  onChange={(e) =>
                    handleChange(startQuestionIndex + index, e.target.value)
                  }
                >
                  <Grid container spacing={2}>
                    {Object.entries(q.options).map(([key, value]) => (
                      <Grid item xs={12} sm={6} key={key}>
                        <FormControlLabel
                          value={key}
                          control={<Radio />}
                          label={`${key}) ${value}`}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </RadioGroup>
              </FormControl>
            </Stack>
          ))}

          {/* Fixed footer for Pagination and Submit */}
          <Box
            sx={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "white",
              boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
              p: 0,
              zIndex: 1000,
              // border: "1px solid red",
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 0 }}
            >
              <Button
                variant="contained"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                size="small"
              >
                Previous
              </Button>
              <Button
                variant="contained"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                size="small"
              >
                Next
              </Button>
            </Stack>

            {/* Fixed Submit Button */}
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{
                width: { xs: "100%", md: "auto" },
                mt: { xs: 2, md: 0 },
              }}
              size="small"
            >
              Submit
            </Button>
          </Box>
        </>
      ) : (
        <Box sx={{ p: { xs: 2, md: 4 } }}>
          <Typography variant="h6">Result Summary</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography>Questions Attended:</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{result.attended}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Questions Skipped:</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{result.skipped}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Incorrect Answers:</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{result.incorrect}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Marks Obtained:</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {result.marks} / {questions.length}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Percentage:</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{result.percentage}%</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            variant="contained"
            sx={{ mt: 3 }}
            onClick={handleViewAnswers}
          >
            View Answers
          </Button>
        </Box>
      )}

      {viewAnswers && (
        <Box sx={{ mt: 4 }}>
          {questions.map((q, index) => (
            <Stack
              key={q.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                marginBottom: "20px",
                p: { xs: 2, md: 3 },
              }}
            >
              <FormControl component="fieldset" sx={{ mb: 3 }}>
                <FormLabel component="legend">
                  {index + 1}. {q.question}
                </FormLabel>
                <RadioGroup name={`question-${q.id}`} value={answers[index]}>
                  <Grid container spacing={2}>
                    {Object.entries(q.options).map(([key, value]) => {
                      const isCorrect = key === q.correctAnswer;
                      const isUserAnswer = answers[index] === key;
                      const isIncorrect = isUserAnswer && !isCorrect;

                      return (
                        <Grid item xs={12} sm={6} key={key}>
                          <FormControlLabel
                            value={key}
                            control={<Radio />}
                            label={`${key}) ${value}`}
                            sx={{
                              backgroundColor: isCorrect
                                ? "green"
                                : isIncorrect
                                ? "red"
                                : "transparent",
                              color:
                                isCorrect || isIncorrect ? "white" : "black",
                            }}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                </RadioGroup>
              </FormControl>
            </Stack>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default App;
