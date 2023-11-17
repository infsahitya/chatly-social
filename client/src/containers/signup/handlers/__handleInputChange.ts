function __handleInputChange(
  e: React.ChangeEvent<HTMLInputElement>,
  stateHandler: React.Dispatch<React.SetStateAction<SignupDataProps>>,
) {
  stateHandler((curr) => {
    curr[`${e.target.name}` as keyof typeof curr] = e.target.value;
    return { ...curr };
  });
}

export default __handleInputChange;
