package com.condominio.dto;

public class DashboardInfo {
    private int encomendas;
    private int avisos;
    private int moradores;

    public DashboardInfo(int encomendas, int avisos, int moradores) {
        this.encomendas = encomendas;
        this.avisos = avisos;
        this.moradores = moradores;
    }

    public int getEncomendas() {
        return encomendas;
    }

    public void setEncomendas(int encomendas) {
        this.encomendas = encomendas;
    }

    public int getAvisos() {
        return avisos;
    }

    public void setAvisos(int avisos) {
        this.avisos = avisos;
    }

    public int getMoradores() {
        return moradores;
    }

    public void setMoradores(int moradores) {
        this.moradores = moradores;
    }
}
