import java.util.ArrayList;
import java.util.LinkedList;

/**
 * The class that represents each State object which are the ValueTypes
 */
public class State {
    ArrayList<City> cities;
    private String stateName;

    public State(String stateName) {
        cities = new ArrayList<>();
        this.stateName = stateName;
    }


    public String getStateName() {
        return this.stateName;
    }

    public ArrayList<City> getListCities() {
        return cities;
    }


    public void addCity(City city) {
        if(!isInArray(city)) {
            cities.add(city);
        }
    }

    public boolean isInArray(City city) {
        for(int i = 0; i < cities.size(); i++) {
            if(cities.get(i).getCityName().equals(city.getCityName())) {
                return true;
            }
        }
        return false;
    }

    public int findCity(City city) {
        for(int i = 0; i < cities.size(); i++) {
            if(cities.get(i).getCityName().equals(city.getCityName())) {
                return i;
            }
        }
        return 0;
    }
}