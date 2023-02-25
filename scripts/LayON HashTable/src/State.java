import java.util.LinkedList;

/**
 * The class that represents each State object which are the ValueTypes
 */
public class State {

    LinkedList<City> cities;
    private String stateName;

    public State(String stateName) {
        cities = new LinkedList<>();
        this.stateName = stateName;

    }

    public String getStateName() {
        return this.stateName;
    }


    public void addCity(City city) {
        // Check if the city already exits, if it does do not add it
        for(int i = 0; i < cities.size(); i++) {
            City currCity = cities.get(i);
            // Gets the city name at each index and check if it is in the list
            if(currCity.getCityName().equals(city.getCityName())) {
                // If it is in the list, add the layoff count from the passed in city to the current
                // one as they are the same (increment city layoff)
                currCity.setLayOff(currCity.getLayOff()+city.getLayOff());
                break;
            }
        }
        // If the loop finishes - the city does not exist so add it
        cities.add(city);
    }
}