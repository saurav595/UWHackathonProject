package com.uw.UnitedWayQRTracking.Visits;

import java.time.LocalDate;

public class Visit {

    private Long visitID;
    private LocalDate date;
    private Long locationId;
    private Long userId;

    public Visit(Long locationId, Long userId) {
        this.locationId = locationId;
        this.userId = userId;
    }

    public Visit() {
    }

    public Visit(LocalDate date, Long locationId, Long userId) {
        this.date = date;
        this.locationId = locationId;
        this.userId = userId;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Long getLocationId() {
        return locationId;
    }

    public void setLocationId(Long locationId) {
        this.locationId = locationId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "Visit{" +
                "date=" + date +
                ", locationId=" + locationId +
                ", userId=" + userId +
                '}';
    }
}
