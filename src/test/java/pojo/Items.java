package pojo;

//import io.cucumber.datatable.dependency.com.fasterxml.jackson.annotation.JsonIgnore;
//import io.cucumber.datatable.dependency.com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Items {
    private int id;
    private String node_id;
    private String name;
    private String full_name;
    @JsonProperty("private")
    private boolean isPrivate;
    @JsonIgnore
    @JsonProperty("owner")
    private Owner owner;
    private int watchers_count;
    private int forks_count;
    private String html_url;
}
