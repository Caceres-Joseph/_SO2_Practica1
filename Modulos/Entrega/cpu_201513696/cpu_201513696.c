
#include <linux/module.h>
#include <linux/proc_fs.h>
#include <linux/seq_file.h>  

#include <linux/fs.h>
#include <linux/init.h>
#include <linux/kernel.h>  
   
#include <linux/sched/signal.h>
#include <linux/sched.h>
struct task_struct *task;        
struct task_struct *task_child;         
struct list_head *list;          

static int hello_proc_show(struct seq_file *m, void *v) {
  

	seq_printf(m, "+---------------------------\n"); 
	seq_printf(m, "| Carné:201513696\n"); 
	seq_printf(m, "| Nombre:Jhosef Cáceres\n"); 
	seq_printf (m,"| Release: Debian 9");
    
    for_each_process( task ){            
        seq_printf(m, "\n| Pid: %d Nombre: %s Estado: %ld",task->pid, task->comm, task->state); 
        list_for_each(list, &task->children){                        
 
            task_child = list_entry( list, struct task_struct, sibling );     
     
            seq_printf(m, "\n| Pid: %d Nombre: %s Estado: %ld", 
                task_child->pid, task_child->comm, task_child->state);
        }   
    }   

	seq_printf(m, "\n+---------------------------\n"); 
    

	return 0;
}

static int hello_proc_open(struct inode *inode, struct  file *file) {
  return single_open(file, hello_proc_show, NULL);
}

static const struct file_operations hello_proc_fops = {
  .owner = THIS_MODULE, 
  .open = hello_proc_open,
  .read = seq_read,
  .llseek = seq_lseek,
  .release = single_release,
};

static int __init hello_proc_init(void) {
    printk(KERN_INFO "201513696\n");
    proc_create("cpu_201513696", 0, NULL, &hello_proc_fops);
    return 0;
}

static void __exit hello_proc_exit(void) {
  printk(KERN_INFO "Sistemas operativos 1\n");
  remove_proc_entry("cpu_201513696", NULL);
}

MODULE_LICENSE("GPL");
MODULE_DESCRIPTION("Modulo de CPU");
MODULE_AUTHOR("Jhosef-201513696");

module_init(hello_proc_init);
module_exit(hello_proc_exit);
