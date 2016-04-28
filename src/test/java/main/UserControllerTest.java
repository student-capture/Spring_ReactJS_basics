package main;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.junit.Assert.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class UserControllerTest extends SpringBasicsApplicationTests {

    @Autowired
    private WebApplicationContext context;

    private MockMvc mvc;

    private static String json_test_string = "{\"name\":\"david\",\"password\":\"1234\"}";

    @Before
    public void setup() {
        mvc = MockMvcBuilders
                .webAppContextSetup(context).
                        build();
    }

    @Test
    public void postShouldBeOk() throws Exception{
        mvc.perform(post("/user").param("name", "David").param("password", "12345")).andExpect(status().isOk());
    }

    @Test
    public void postShouldUpdateUser() throws Exception {
        mvc.perform(post("/userJSON").contentType(MediaType.APPLICATION_JSON).content(json_test_string))
                .andExpect(status().isOk());

        String result = mvc.perform(get("/user")).andExpect(status().isOk()).andReturn().getResponse()
                .getContentAsString();

        assertEquals(json_test_string, result);
    }
}
