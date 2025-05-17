package com.nicolasgayb.CondominioFacil.dto;

public class DashboardInfo {
    private int encomendasAguardando;
    private int avisosNovos;
    private int moradoresAtivos;

    public DashboardInfo(int encomendasAguardando, int avisosNovos, int moradoresAtivos) {
        this.encomendasAguardando = encomendasAguardando;
        this.avisosNovos = avisosNovos;
        this.moradoresAtivos = moradoresAtivos;
    }

    public int getEncomendasAguardando() {
        return encomendasAguardando;
    }

    public int getAvisosNovos() {
        return avisosNovos;
    }

    public int getMoradoresAtivos() {
        return moradoresAtivos;
    }
}
