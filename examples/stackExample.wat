(module
  (export "minusone" (func $minusone))
  (export "multiplicate" (func $multiplicate))
  (func $minusone (param $num i32) (result i32)
    local.get $num ;; Insert into stack
    i32.const 1  ;; Insert into stack
    i32.sub    ;; POP from stack and operate - Last value in stack equals result
  )
  (func $multiplicate (param $num i32) (param $num2 i32) (result i32)
    local.get $num  ;; Insert into stack
    local.get $num2 ;; Insert into stack
    i32.mul ;;Pop from stack and operate
  )
)