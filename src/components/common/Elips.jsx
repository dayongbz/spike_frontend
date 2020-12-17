function Elips({ children }) {
  return <>{children?.substr(0, 20) + "..."}</>;
}
export default Elips;
