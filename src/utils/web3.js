import Web3 from "web3";

const hostname = window && window.location && window.location.hostname;

const web3 =
  hostname === "localhost"
    ? new Web3(new Web3.providers.HttpProvider("http://localhost:7545"))
    : new Web3(
        new Web3.providers.HttpProvider(
          "https://kovan.infura.io/v3/cd707e5775c4436b99bf72ec202897c1"
        )
      );

export default web3;
