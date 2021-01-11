package pojo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class Owner {
    @JsonProperty
    private String login;
    @JsonProperty
    private int id;
    @JsonProperty
    private String node_id;
    @JsonProperty
    private String avatar_url;
    @JsonProperty
    private String gravatar_id;
    @JsonProperty
    private String url;

}
