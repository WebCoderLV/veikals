export type PreceT = {
    nosaukums: string;
    cena: number;
    check: boolean;
}

export type DaudzPrecesT = {
    veikals: string;
   precesMasivs: PreceT[];
}