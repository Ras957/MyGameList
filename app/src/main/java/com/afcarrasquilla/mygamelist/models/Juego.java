package com.afcarrasquilla.mygamelist.models;

import com.afcarrasquilla.mygamelist.views.FormularioActivity;

import java.time.LocalDate;
import java.util.Date;
import java.util.regex.Pattern;

public class Juego {

    private static final int MIN_ID = 0;
    public static final int MIN_HOURS = 1;
    public static final int MAX_HOURS = 9999;

    private Integer id = null;
    private String name = null;
    private String company = null;
    private String image = null;
    private int hours = 0;
    private String date = null;
    private String platform = null;
    private boolean property = false;

    public Juego(){}

    public Integer getId() {
        return id;
    }

    public boolean setId(Integer id) {
        if (id>MIN_ID){
            this.id = id;
            return true;
        }
        return false;
    }

    public String getName() {
        return name;
    }

    public boolean setName(String name) {
        if (name.equals("")){
            return false;
        }else if(name.length() > 100 || name.length() < 3){
            return false;
        }else if(name.toLowerCase().equals("fuck")){
            return false;
        }
        this.name = name;
        return true;
    }

    public String getCompany() {
        return company;
    }

    public boolean setCompany(String company) {
        if (company.equals("")){
            return false;
        }else if(company.length() > 100 || company.length() < 3){
            return false;
        }
        this.company = company;
        return true;
    }

    public String getImage() {
        return image;
    }

    public boolean setImage(String image) {
        this.image = image;
        return true;
    }

    public boolean isProperty() {
        return property;
    }

    public boolean setProperty(boolean property) {
        this.property = property;
        return true;
    }

    public String getPlatform() {
        return platform;
    }

    public boolean setPlatform(String platform) {
        if (platform.equals("")){
            return false;
        }else if (platform.length() < 3){
            return  false;
        }else if (platform.length() > 20){
            return  false;
        }else if (platform.equals(FormularioActivity.DEFAULT_OPTION_SPINNER)){
            return  false;
        }
        this.platform = platform;
        return true;
    }

    public String getDate() {
        return date;
    }

    public boolean setDate(String date) {
        Pattern DATE_PATTERN = Pattern.compile(
                "^(0?[1-9]|[12][0-9]|3[01])\\/(0?[1-9]|1[012])\\/((19|2[0-9])[0-9]{2})$");
        if (date.equals("")){
            return false;
        }else if (DATE_PATTERN.matcher(date).matches()){
            this.date = date;
            return true;
        }else{
            return false;
        }
    }

    public int getHours() {
        return hours;
    }

    public boolean setHours(int hours) {
        if (hours<MIN_HOURS){
            return false;
        }else if (hours>MAX_HOURS){
            return false;
        }
        this.hours = hours;
        return true;
    }
}
