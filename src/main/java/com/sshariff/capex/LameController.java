package com.sshariff.capex;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LameController {

    @RequestMapping("/")
    public String thing() {
        return "index";
    }

}
