use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn calculate(a: i32, b: i32, op: &str) -> f64 {
    let result: f64;

    match op {
        "+" => result = (a + b) as f64,
        "-" => result = (a - b) as f64,
        "*" => result = (a as f64) * (b as f64),
        "/" => result = (a as f64) / (b as f64),
        _ => result = f64::NAN,
    }

    (result * 100.0).round() / 100.0
}
