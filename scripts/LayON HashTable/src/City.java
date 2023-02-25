/**
 * Each city that are stored in a linked list in the associated state
 */
public class City {

    private String city; // city name
    private int layOff; // number of layoffs in that city

    public City(String city, int layOff) {

        this.city = city;
        this.layOff = layOff;
    }

    public String getCityName() {
        return this.city;
    }

    public int getLayOff() {
        return this.layOff;
    }

    public void setLayOff(int newLayOff) {
        layOff = newLayOff;
    }

}