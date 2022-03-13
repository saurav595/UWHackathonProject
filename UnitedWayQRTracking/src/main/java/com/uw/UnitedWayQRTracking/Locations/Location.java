package com.uw.UnitedWayQRTracking.Locations;

public class Location {
    private Long locationId;
    private String name;
    private String zipcode;

    public Location() {
    }

    public Location(String name, String zipcode) {
        this.name = name;
        this.zipcode = zipcode;
    }

    public Location(Long locationId, String name, String zipcode) {
        this.locationId = locationId;
        this.name = name;
        this.zipcode = zipcode;
    }

    public Long getLocationId() {
        return locationId;
    }

    public String getName() {
        return name;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setLocationId(Long locationId) {
        this.locationId = locationId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    @Override
    public String toString() {
        return "Location{" +
                "locationId=" + locationId +
                ", name='" + name + '\'' +
                ", zipcode='" + zipcode + '\'' +
                '}';
    }
}
