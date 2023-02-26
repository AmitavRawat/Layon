import java.io.File;
import java.io.FileNotFoundException;
import java.util.*;

/**
 * Converts csv to json
 */
public class LayHash {

    private File file; // The csv file that needs to be converted to json
    protected ArrayList<Entry> table;
    private int capacity;

    public LayHash(String fileName) {
        table = new ArrayList<Entry>();
        this.file = new File(fileName);
    }



    public void add() throws FileNotFoundException {
        Scanner sc = new Scanner(file);

        while(sc.hasNextLine()) {
            String[] splitParts = sc.nextLine().split(",");
            String monthYear = splitParts[0]+splitParts[1];
            





            if (isInTable(new Entry(monthYear))) {



            } else {
                // If it does not exist then add it
                City city = new City(splitParts[3], Integer.parseInt(splitParts[4]));
                State state = new State(splitParts[2]);
                state.addCity(city);
                Entry entry = new Entry(monthYear);
                entry.addStates(state);
            }


        }

    }

    public boolean isInTable(Entry entry) {
        for(int i = 0; i < table.size(); i++) {
            if(table.get(i).getKey().equals(entry.getKey())) {
                return true;
            }
        }
        return false;
    }

    public int findIndexKey(Entry entry) {
        for(int i = 0; i < table.size(); i++) {
            if(table.get(i).getKey().equals(entry.getKey())) {
                return i;
            }
        }
        return 0;
    }



}
