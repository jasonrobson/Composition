import React from "react";

export const funcComposta = (funcUm, funcDois) => param =>
  funcDois(funcUm(param));

export const somarCinco = param => param + 5;
export const multiplicarPorDois = param => param * 2;
export const saudar = param => "Ola " + param + ", ";
export const bomDia = param => param + "bom dia!";
